import * as React from "react";
import {useCallback, useContext, useMemo, useReducer, useRef, useState} from "react";

import {Player, Utils, ReplayData} from "ractive-player";
const {replay} = Utils.animation,
      {between} = Utils.misc;

import {Action, MakePath} from "./actions";

const {floor, max, min} = Math;

interface Props {
  start: number | string;
  end?: number | string;
  replay?: ReplayData<Action>;
}

type State = any;

const initialState: State = {
  activeSheet: 0,
  strokeStyle: "#000",
  lineWidth: 2
};

export default function PaintReplay(props: Props) {
  const {playback, script} = useContext(Player.Context);
  const tempLayer = useRef<HTMLCanvasElement>();
  const renderLayer = useRef<HTMLCanvasElement>();
  const data = props.replay;

  const stableIndex = useRef(0);
  const stableSum = useRef(0);

  const state = useRef(initialState);

  React.useEffect(() => {
    const start = script.parseStart(props.start) ?? 0;
    let lastTime = playback.currentTime;

    function repaint(currentTime: number, reset = false) {
      const stable = renderLayer.current,
            stabCtx = stable.getContext("2d");
      const temp = tempLayer.current,
            tempCtx = temp.getContext("2d");
      const {lineWidth, strokeStyle} = state.current;

      // reset canvases and counts
      if ((currentTime < lastTime) || reset) {
        stableIndex.current = 0;
        stableSum.current = 0;
        stabCtx.clearRect(0, 0, stable.width, stable.height);
      }
      lastTime = currentTime;

      // clear temp canvas
      tempCtx.clearRect(0, 0, temp.width, temp.height);

      // quit if not rendered yet
      if (currentTime < start)
        return;

      let i = stableIndex.current;
      let sum = stableSum.current;

      /**
        Consumes next actions in stack verifying test condition.
        "complete" return value indicates whether quit due to time.
      */
      function consume({test}: ConsumeArgs): [Action[], boolean] {
        const vals = [];
        for (; i+1 < data.length; ++i) {
          const [s, act] = data[i+1];
          if (currentTime <= s+start+sum) {
            return [vals, false];
            break;
          }
          if (!test(act)) {
            return [vals, true];
            break;
          }
          sum += s;
          vals.push(act);
        }
        return [vals, true];
      }

      // clear temp layer
      tempCtx.clearRect(0, 0, temp.width, temp.height);

      for (; i < data.length; ++i) {
        const [t, action] = data[i];
        sum += t;
        if (currentTime <= start + sum)
          break;

        const complete = process({
          action,
          consume,
          stable,
          state: state.current,
          temp
        });

        if (complete) {
          stableIndex.current = i+1;
          stableSum.current = sum;
        } else {
          break;
        }
      }
    }

    function resize() {
      const rect = renderLayer.current.getBoundingClientRect();
      tempLayer.current.height = renderLayer.current.height = rect.height;
      tempLayer.current.width = renderLayer.current.width = rect.width;

      repaint(playback.currentTime, true);
    }

    window.addEventListener("resize", resize);
    playback.hub.on("seek", repaint);
    playback.hub.on("timeupdate", repaint);

    resize();

    return () => {
      window.removeEventListener("resize", resize);
      playback.hub.off("seek", repaint);
      playback.hub.off("timeupdate", repaint);
    };
  }, [renderLayer.current, tempLayer.current]);

  return (
    <div className="rp-paint-view">
      <canvas className="rp-paint-layer noinput" ref={tempLayer}/>
      <canvas className="rp-paint-layer noinput" ref={renderLayer}/>
    </div>
  );
}

import process, {ConsumeArgs} from "./process";

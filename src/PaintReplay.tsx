/* imports */
import * as React from "react";
import {useCallback, useContext, useMemo, useReducer, useRef, useState} from "react";

import {Utils, ReplayData, usePlayer} from "ractive-player";
const {replay} = Utils.animation,
      {between} = Utils.misc;

import {Action, MakePath} from "./actions";
import {State} from "./types";
import {extractRefs} from "./utils";

import {Consumer} from "./Consumer";

/* interfaces */
const {floor, max, min} = Math;

interface Props {
  start: number | string;
  end?: number | string;
  replay?: ReplayData<Action>;
}

const initialState: State = {
  activeSheet: 0,
  strokeStyle: "#000",
  lineWidth: 2,
  sheets: []
};

/* declarations */
// main component
export default function PaintReplay(props: Props) {
  const {playback, script} = usePlayer();
  
  const data = useRef(props.replay ?? []);

  const state = useRef(initialState);

  // initial configuration of feed --- we should do this differently...
  const feed = useRef<Action[]>([
    {type: "change-sheet", sheet: 0},
    {type: "set-stroke-style", strokeStyle: "#FFF"}
  ]);

  // stable + temp layers
  const $layers = {
    stable: useRef<HTMLCanvasElement>(),
    temp: useRef<HTMLCanvasElement>()
  };

  React.useEffect(() => {
    const start = script.parseStart(props.start) ?? 0;

    let lastTime = playback.currentTime;
    let stableIndex = 0;
    let stableSum = 0;

    function repaint(currentTime: number = playback.currentTime, reset = false) {
      const stable = $layers.stable.current,
            stabCtx = stable.getContext("2d");
      const temp = $layers.temp.current,
            tempCtx = temp.getContext("2d");
      const {lineWidth, strokeStyle} = state.current;

      // reset canvases and counts
      if ((currentTime < lastTime) || reset) {
        stableIndex = 0;
        stableSum = 0;
        stabCtx.clearRect(0, 0, stable.width, stable.height);
      }
      lastTime = currentTime;
      state.current.repaint = repaint;

      // clear temp canvas
      tempCtx.clearRect(0, 0, temp.width, temp.height);

      // quit if not rendered yet
      if (currentTime < start)
        return;

      // temporary counters
      let i = stableIndex;
      let sum = stableSum;

      /* determine actions to run */
      let lastSheetChange = null;
      let lastStrokeChange = null;
      let stopIndex = i;

      for (; i < data.current.length; ++i) {
        const [t, action] = data.current[i];
        sum += t;
        if (currentTime <= start + sum) {
          break;
        }

        stopIndex = i+1;

        if (action.type === "set-stroke-style") {
          lastStrokeChange = i;
        } else if (action.type === "change-sheet") {
          lastSheetChange = i;
          stableSum = sum-t;
        }
      }

      /* now play the actions */
      // start at most recent sheet
      if (lastSheetChange !== null) {
        stableIndex = lastSheetChange;

        // set stroke color correctly
        if (lastStrokeChange !== null) {
          process({
            action: data.current[lastStrokeChange][1],
            consume,
            stable,
            state: state.current,
            temp
          });
        }
      }

      i = stableIndex;
      sum = stableSum;

      // consuming function
      function consume({test}: ConsumeArgs): [Action[], boolean] {
        const vals = [];
        for (; i+1 < stopIndex; ++i) {
          const [t, action] = data.current[i+1];

          if (!test(action)) {
            return [vals, true];
            break;
          }
          sum += t;
          vals.push(action);
        }
        return [vals, stopIndex === data.current.length];
      }

      for (; i < stopIndex; ++i) {
        const [t, action] = data.current[i];
        sum += t;

        const complete = process({
          action,
          consume,
          stable,
          state: state.current,
          temp
        });

        if (complete) {
          stableIndex = i+1;
          stableSum = sum;
        } else {
          break;
        }
      }
    }

    function resize() {
      const rect = $layers.stable.current.getBoundingClientRect();
      $layers.temp.current.height = $layers.stable.current.height = rect.height;
      $layers.temp.current.width = $layers.stable.current.width = rect.width;

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
  }, [$layers.stable.current, $layers.temp.current]);

  return (
    <div className="rp-paint-view">
      <canvas className="rp-paint-layer noinput" ref={$layers.temp}/>
      <canvas className="rp-paint-layer noinput" ref={$layers.stable}/>
    </div>
  );
}

import process, {ConsumeArgs} from "./process";

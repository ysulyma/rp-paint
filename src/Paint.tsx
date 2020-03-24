import * as React from "react";
import {useCallback, useContext, useMemo, useReducer, useRef, useState} from "react";

import {Player, Utils, ReplayData} from "ractive-player";
const {replay} = Utils.animation,
      {dragHelperReact} = Utils.interactivity,
      {between} = Utils.misc;

import PaintSettings from "./Settings";
import {Action, UIAction} from "./actions";
import PaintRecorder from "./recorder";

const {floor, max, min} = Math;

interface Props {
  src: string;
  start: number | string;
  end: number | string;
  replay?: ReplayData<Action>;
  recorder?: PaintRecorder.recorder;
}

type Color = string;

interface Child {
  type: "path";
  strokeStyle: string;
  lineWidth: number;
  points: [number, number][];
}

type Sheet = Child[];

export interface State {
  activeSheet: number;
  tool: "draw" | "eraser" | "move";
  strokeStyle: Color;
  lineWidth: number;
  complete: boolean;
}

const initialState: State = {
  tool: "draw",
  activeSheet: 0,
  strokeStyle: "#000",
  lineWidth: 2,
  complete: true
};

export const PaintContext = React.createContext<State & {dispatch: any;}>(null);

interface UIState {
  strokeStyle: Color;
  tool: "draw" | "eraser";
}

function uiReducer(state: UIState, action: UIAction) {
  switch (action.type) {
    case "set-stroke-style":
      return {
        ...state
      };
    case "set-tool":
      return {
        ...state,
        tool: action.name
      };
  }
  return state;
}

let count = 0;
export function PaintCanvas(props: Props) {
  const drawLayer = useRef<HTMLCanvasElement>();
  const renderLayer = useRef<HTMLCanvasElement>();
  const index = useRef(0);

  const sheets = useRef<Sheet[]>([[]]);
  const stack = useRef<Action[]>([
    {type: "set-stroke-style", strokeStyle: "#000"}
  ]);
  window.stack = stack.current;
  const layers = {
    aid: useRef<HTMLCanvasElement>()
  };

  const state = useRef(initialState);
  const [uiState, uiDispatch] = useReducer(uiReducer, {
    tool: "draw"
  });
  state.current.tool = uiState.tool;
  // state.current.strokeStyle = uiState.strokeStyle;
  state.current.uiDispatch = uiDispatch;

  const $repaint = useRef(null);

  const record = useCallback((action: Action) => {
    props.recorder?.instance?.capture?.(action);
    stack.current.push(action);
  }, [props.recorder]);
  state.current.record = record;

  const events = useMemo(() => {
    return {
      onMouseMove: (e: React.MouseEvent<HTMLCanvasElement>) => {
        const tool = toolset[state.current.tool];
        tool.hover({
          canvas: layers.aid.current,
          hit: {
            x: e.clientX,
            y: e.clientY
          }
        });
      },
      ...dragHelperReact(
      (e, hit) => {
        const tool = toolset[state.current.tool];
        tool.move({
          canvas: drawLayer.current,
          e,
          hit,
          stack: stack.current,
          state: state.current,
          record
        });
        $repaint.current();
      },
      (e, hit) => {
        const tool = toolset[state.current.tool];
        tool.down({
          canvas: drawLayer.current,
          e,
          hit,
          stack: stack.current,
          state: state.current,
          record
        });
        $repaint.current();
      },
      (e) => {
        const tool = toolset[state.current.tool];
        tool.up({
          canvas: drawLayer.current,
          e,
          stack: stack.current,
          state: state.current,
          target: renderLayer.current,
          record
        });
        $repaint.current();
      }
    )};
  }, []);

  React.useEffect(() => {
    const stable = renderLayer.current,
          stabCtx = stable.getContext("2d");
    const temp = drawLayer.current,
          tempCtx = temp.getContext("2d");
    const data = stack.current;
    $repaint.current = repaint;

    /* methods! */
    function repaint(reset = false) {
      const {width, height} = stable;

      // reset canvases and counts
      if (reset) {
        index.current = 0;
        stabCtx.clearRect(0, 0, stable.width, stable.height);
        tempCtx.clearRect(0, 0, temp.width, temp.height);
      }

      let i = index.current;
      /**
        Consumes next actions in stack verifying test condition.
        "complete" return value indicates whether quit due to time.
      */
      function consume({test}: ConsumeArgs): [Action[], boolean] {
        const vals = [];
        for (; i+1 < data.length; ++i) {
          const act = data[i+1];
          if (!test(act)) {
            return [vals, true];
            break;
          }
          vals.push(act);
        }
        return [vals, state.current.complete];
      }

      // clear temp layer
      tempCtx.clearRect(0, 0, temp.width, temp.height);

      // tempCtx.save();
      for (; i < data.length; ++i) {
        const action = data[i];

        const complete = process({
          action,
          consume,
          stable,
          state: state.current,
          temp
        });

        if (complete) {
          index.current = i+1;
        } else {
          break;
        }
      }
      // tempCtx.restore();
    }

    function resize() {
      const rect = renderLayer.current.getBoundingClientRect();
      for (const key in layers) {
        layers[key].current.height = rect.height;
        layers[key].current.width = rect.width;
      }
      drawLayer.current.height = renderLayer.current.height = rect.height;
      drawLayer.current.width = renderLayer.current.width = rect.width;
      repaint(true);
    }

    window.addEventListener("resize", resize);

    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [drawLayer.current, renderLayer.current]);

  return (
    <PaintContext.Provider value={state.current}>
      <canvas className="rp-paint-layer noinput" ref={layers.aid}/>
      <canvas id="temp" className="rp-paint-layer" {...events} ref={drawLayer}/>
      <canvas id="stable" className="rp-paint-layer noinput" ref={renderLayer}/>
      <PaintSettings/>
    </PaintContext.Provider>
  );
}

import PaintReplay from "./PaintReplay";
export {PaintReplay};

import {DrawTool, EraserTool, MoveTool} from "./tools";
const toolset = {
  draw: DrawTool,
  eraser: EraserTool,
  move: MoveTool
};
import process, {ConsumeArgs} from "./process";

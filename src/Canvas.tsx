// imports
import * as React from "react";
import {useCallback, useContext, useMemo, useReducer, useRef, useState} from "react";

import {Player, Utils, ReplayData} from "liqvid";
const {replay} = Utils.animation,
      {dragHelperReact} = Utils.interactivity,
      {between} = Utils.misc;

import type {Action, UIAction} from "./actions";
import type PaintRecorder from "./recorder";
import type {Color} from "./types";
import {extractRefs} from "./utils";

import {Consumer} from "./Consumer";

import {DrawTool, EraserTool} from "./tools";
const toolset = {
  draw: DrawTool,
  eraser: EraserTool
  // move: MoveTool
};
import process, {ConsumeArgs} from "./process";

import PaintSettings from "./Settings";

// interfaces
interface Props {
  recorder?: typeof PaintRecorder.recorder;
}

export interface State {
  tool: "draw" | "eraser" | "move";
  strokeStyle: Color;
  lineWidth: number;
}

interface Context {
  consumer: Consumer;
  layers: {
    stable: HTMLCanvasElement;
    temp: HTMLCanvasElement;
  };
  dispatch: React.Dispatch<UIAction>;
  $state: React.MutableRefObject<State>;
}

// declarations
const initialState: State = {
  tool: "draw",
  strokeStyle: "#000000",
  lineWidth: 2
};

const {floor, max, min} = Math;

export const PaintContext = React.createContext<Context>(null);

function reducer(state: State, action: UIAction) {
  switch (action.type) {
  case "set-stroke-style":
    return {
      ...state,
      strokeStyle: action.strokeStyle
    };
  case "set-tool":
    return {
      ...state,
      tool: action.name
    };
  }
  return state;
}

/* main class */
export function PaintCanvas(props: Props) {
  // initial configuration of feed --- we should do this differently...
  const feed = useRef<Action[]>([]);

  // we have three layers
  const $layers = {
    aid: useRef<HTMLCanvasElement>(),
    stable: useRef<HTMLCanvasElement>(),
    temp: useRef<HTMLCanvasElement>()
  };

  // this is the UI state
  const [state, dispatch] = useReducer(reducer, initialState);
  const $state = useRef(initialState);
  $state.current = state as State;

  // initialize the Consumer
  const $consumer = useRef(new Consumer({
    feed: feed.current,

    record(action) {
      props.recorder?.captureAction(action);
      this.feed.push(action);
    }
  }));
  const consumer = $consumer.current;
  // (window as any).consumer = consumer;

  // context
  const context = {
    consumer: $consumer.current,
    dispatch,
    layers: extractRefs($layers),
    $state
  };

  /*
    Attach events for hover and drag.
  */
  const events = useMemo(() => {
    return {
      onMouseMove: (e: React.MouseEvent<HTMLCanvasElement>) => {
        const tool = toolset[$state.current.tool];
        tool.hover?.({
          layers: extractRefs($layers),
          hit: {
            x: e.clientX,
            y: e.clientY
          }
        });
      },
      ...dragHelperReact(
        (e, hit) => {
          const tool = toolset[$state.current.tool];
          tool.move?.({
            e, hit,
            consumer, layers: extractRefs($layers)
          });
        },
        (e, hit) => {
          const tool = toolset[$state.current.tool];
          tool.down?.({
            e, hit,
            consumer, layers: extractRefs($layers), state: $state.current
          });
        },
        (e) => {
          const tool = toolset[$state.current.tool];
          tool.up?.({
            e, consumer, layers: extractRefs($layers)
          });
        }
      )};
  }, []);

  React.useEffect(() => {
    // layers exist now
    consumer.layers = extractRefs($layers);

    // redraw layers on resize
    function resize() {
      for (const key in $layers) {
        const layer = $layers[key].current;
        const rect = layer.getBoundingClientRect();
        layer.height = rect.height;
        layer.width = rect.width;
      }
      consumer.repaint(true);
    }
    window.addEventListener("resize", resize);

    // initial draw
    resize();

    return () => {
      // unbind event listeners
      window.removeEventListener("resize", resize);
    };
  }, [$layers.temp.current, $layers.stable.current]);

  return (
    <div className="rp-paint-canvas-container">
      <PaintContext.Provider value={context}>
        <canvas id="stable" className="rp-paint-layer noinput" ref={$layers.stable}/>
        <canvas id="temp" className="rp-paint-layer" {...events} ref={$layers.temp}/>
        <canvas className="rp-paint-layer noinput" ref={$layers.aid}/>
        <PaintSettings/>
      </PaintContext.Provider>
    </div>
  );
}


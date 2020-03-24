import type {Action, MakePath} from "../actions";
import type {State} from "../Paint";

interface HoverArgs {
  canvas: HTMLCanvasElement;
}

export interface ToolArgs {
  canvas: HTMLCanvasElement;
  e: MouseEvent | TouchEvent | React.MouseEvent<unknown> | React.TouchEvent<unknown>;
  hit?: {
    x: number;
    y: number;
    dx?: number;
    dy?: number;
  };
  layers: {
    [key: string]: React.MutableRefObject<HTMLCanvasElement>;
  };
  record: (a: Action) => void;
  stack: Action[];
  state: State;
  target?: HTMLCanvasElement;
}

export interface Tool {
  name: string;
  hover(args: HoverArgs): void;
  move(args: ToolArgs): void;
  down(args: ToolArgs): void;
  up(args: ToolArgs): void;
  [key: string]: unknown;
}

import DrawTool from "./draw";
import EraserTool from "./eraser";
export {DrawTool, EraserTool};

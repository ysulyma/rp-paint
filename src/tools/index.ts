import type {Action, MakePath} from "../actions";
import type {Consumer} from "../Consumer";

interface HoverArgs {
  layers: {
    stable: HTMLCanvasElement;
    temp: HTMLCanvasElement;
    aid: HTMLCanvasElement;
  };
  hit: {
    x: number;
    y: number;
  };
}

export interface ToolArgs {
  consumer: Consumer;
  e: MouseEvent | TouchEvent | React.MouseEvent<unknown> | React.TouchEvent<unknown>;
  hit?: {
    x: number;
    y: number;
    dx?: number;
    dy?: number;
  };
  layers: {
    stable: HTMLCanvasElement;
    temp: HTMLCanvasElement;
    aid: HTMLCanvasElement;
  };
  record: (a: Action) => void;
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

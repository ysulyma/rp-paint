import * as React from "react";
import {ReplayData} from "ractive-player";

interface Clear {
  type: "clear";
}

interface ChangeSheet {
  type: "change-sheet";
  sheet: number;
}

interface Erase {
  type: "erase";
  x: number;
  y: number;
  r: number;
}

interface MoveTo {
  type: "move-to";
  x: number;
  y: number;
}

interface EndPath {
  type: "end-path";
}

interface SetTool {
  type: "set-tool";
  name: string;
}

interface SetStrokeStyle {
  type: "set-stroke-style";
  strokeStyle: string;
}

interface LineTo {
  type: "line-to";
  x: number;
  y: number;
}

interface MakePath {
  type: "make-path";
  strokeStyle: string;
  lineWidth: number;
  points: [number, number][];
}

type Action =
  Clear | Erase | SetStrokeStyle |
  | ChangeSheet |
  MoveTo | LineTo | EndPath | MakePath;

type UIAction =
  SetStrokeStyle | SetTool;


interface Props {
  start: number | string;
  end: number | string;
  replay?: ReplayData<Action>;
  recorder?: unknown;
}

export function PaintCanvas(props: Props): React.FC;
export function PaintReplay(props: Props): React.FC;

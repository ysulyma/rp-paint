export interface Clear {
  type: "clear";
}

export interface ChangeSheet {
  type: "change-sheet";
  sheet: number;
}

export interface Erase {
  type: "erase";
  x: number;
  y: number;
  r: number;
}

export interface MoveTo {
  type: "move-to";
  x: number;
  y: number;
}

export interface EndPath {
  type: "end-path";
}

export interface SetTool {
  type: "set-tool";
  name: string;
}

export interface SetStrokeStyle {
  type: "set-stroke-style";
  strokeStyle: string;
}

export interface LineTo {
  type: "line-to";
  x: number;
  y: number;
}

export interface MakePath {
  type: "make-path";
  strokeStyle: string;
  lineWidth: number;
  points: [number, number][];
}

export interface Undo {
  type: "undo";
}

export type Action =
  Clear | Erase | SetStrokeStyle |
  ChangeSheet |
  MoveTo | LineTo | EndPath | MakePath
  | Undo;

export type UIAction =
  SetStrokeStyle | SetTool;


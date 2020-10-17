export type Color = string;

export interface Child {
  type: "path";
  strokeStyle: string;
  lineWidth: number;
  points: [number, number][];
}

export type Sheet = Child[];

export interface State {
  activeSheet: number;
  tool: "draw" | "eraser" | "move";
  strokeStyle: Color;
  lineWidth: number;
  complete: boolean;
  sheets: Sheet[];
  repaint?: (t?: number) => void;
}

export interface Handler {
  preprocess(): void;
  process(): void;
}

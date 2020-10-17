import {Action, LineTo, MakePath} from "./actions";

import {State} from "./types";

export interface ConsumeArgs {
  test: (action: Action) => boolean;
}

interface Args {
  action: Action;
  consume: <K>(args: ConsumeArgs) => [K[], boolean];
  stable: HTMLCanvasElement;
  state: State;
  temp: HTMLCanvasElement;
}

const {ceil, floor, max, min} = Math;

export default function process({action, consume, stable, state, temp}: Args): boolean {
  const {lineWidth, strokeStyle} = state;
  const stabCtx = stable.getContext("2d");
  const tempCtx = temp.getContext("2d");

  switch (action.type) {
    case "change-sheet":
      if (action.sheet >= state.sheets.length) {
        state.sheets.length = action.sheet;
      }
      if (action.sheet !== state.activeSheet) {
        stabCtx.clearRect(0, 0, stable.width, stable.height);
      }
      state.activeSheet = action.sheet;
      return true;
    case "set-stroke-style": {
      stabCtx.strokeStyle
        = state.strokeStyle
        = tempCtx.strokeStyle
        = action.strokeStyle;
      return true;
    }
    case "clear":
      stabCtx.clearRect(0, 0, stable.width, stable.height);
      return true;
    case "erase": {
      const ctx = stable.getContext("2d");
      ctx.save();

      ctx.beginPath();
      ctx.globalCompositeOperation = "destination-out";
      ctx.arc(
        floor(action.x * stable.width),
        floor(action.y * stable.height),
        floor(action.r * stable.width),
        0,
        2 * Math.PI
      );
      ctx.fill();
      
      ctx.restore();

      return true;
    }
    case "move-to":
      const [lineTos, complete] = consume<LineTo>({
        test: act => act.type === "line-to"
      });

      const points = [[action.x, action.y], ...lineTos.map(_ => [_.x, _.y])];

      const canvas = complete ? stable : temp;
      const ctx = canvas.getContext("2d");
      const {height, width} = canvas;

      ctx.lineJoin = ctx.lineCap = "round";
      ctx.strokeStyle = state.strokeStyle;
      ctx.lineWidth = state.lineWidth;
      
      // draw single point if length = 1
      if (points.length === 1) {
        ctx.fillStyle = strokeStyle;
        ctx.fillRect(
          floor(width * points[0][0] - lineWidth/2),
          floor(height * points[0][1] - lineWidth/2),
          lineWidth, lineWidth
        );
      } else {
        ctx.beginPath();
        ctx.moveTo(floor(points[0][0] * width), floor(points[0][1] * height)); 
        
        for (let i = 0, len = points.length; i < len-1; i++) {
          const p1 = points[i],
                p2 = points[i+1];
          const midX = p1[0] + (p2[0] - p1[0])/2,
                midY = p1[1] + (p2[1] - p1[1])/2;
          ctx.quadraticCurveTo(
            floor(width * p1[0]),
            floor(height * p1[1]),
            floor(width * midX),
            floor(height * midY)
          );
        }
        
        ctx.stroke();
      }
      return complete;
  }
}


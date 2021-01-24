import type {MoveTo, LineTo, SetStrokeStyle, EndPath, MakePath} from "../actions";
import type {Consumer, Handler} from "../Consumer";

const {ceil, floor, max, min} = Math;

export const SetStrokeHandler: Handler = {
  type: "set-stroke-style" as const,

  process(this: Consumer, action: SetStrokeStyle) {
    for (const _ of [this.contexts.stable, this.contexts.temp, this.state]) {
      _.strokeStyle = action.strokeStyle;
    }
    return true;
  }
}

export const MoveToHandler: Handler = {
  type: "move-to" as const,

  process(this: Consumer, action: MoveTo) {
    const {lineWidth, strokeStyle} = this.state;

    const [lineTos, complete] = this.consume({
      test: act => act.type === "line-to"
    }) as [LineTo[], boolean];

    const points = [[action.x, action.y], ...lineTos.map(_ => [_.x, _.y])];

    const canvas = complete ? this.layers.stable : this.layers.temp;
    const ctx = canvas.getContext("2d");
    const {height, width} = canvas;

    ctx.lineJoin = ctx.lineCap = "round";
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    
    // if length of path is 1, draw a single dot
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

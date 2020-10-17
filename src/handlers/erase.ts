import {Erase} from "../actions";
import type {Consumer} from "../Consumer";

const {ceil, floor, max, min} = Math;

export const EraseHandler = {
  type: "erase",

  process(this: Consumer, action: Erase) {
    const canvas = this.layers.stable;
    const ctx = canvas.getContext("2d");
    ctx.save();

    ctx.beginPath();
    ctx.globalCompositeOperation = "destination-out";
    ctx.arc(
      floor(action.x * canvas.width),
      floor(action.y * canvas.height),
      floor(action.r * canvas.width),
      0,
      2 * Math.PI
    );
    ctx.fill();
    
    ctx.restore();

    return true;
  }
}

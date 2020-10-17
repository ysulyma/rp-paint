import {Clear} from "../actions";
import type {Consumer} from "../Consumer";

export const ClearHandler = {
  type: "clear",

  process(this: Consumer, action: Clear) {
    const {stable} = this.layers,
          stableCtx = stable.getContext("2d");
    stableCtx.clearRect(0, 0, stable.width, stable.height);
    return true;
  }
}

import {Tool} from "./index";

export default {
  name: "draw",

  hover({canvas}){
    // const ctx = canvas.getContext("2d");
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
  },

  down({canvas, hit, record, state}) {
    const rect = canvas.getBoundingClientRect();

    const action = {
      type: "move-to" as const,
      x: (hit.x - rect.left) / rect.width,
      y:  (hit.y - rect.top) / rect.height
    };
    record(action);

    state.complete = false;
  },

  move({canvas, hit, record}) {
    const rect = canvas.getBoundingClientRect(),
          {width, height} = rect;

    const action = {
      type: "line-to" as const,
      x: (hit.x - rect.left) / width,
      y:  (hit.y - rect.top) / height
    };
    record(action);
  },

  up({state}) {
    state.complete = true;
  }
} as Tool;

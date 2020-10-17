import {Tool} from "./index";

export default {
  name: "draw",

  down({consumer, layers, hit}) {
    const rect = layers.stable.getBoundingClientRect();

    const action = {
      type: "move-to" as const,
      x: (hit.x - rect.left) / rect.width,
      y:  (hit.y - rect.top) / rect.height
    };
    consumer.record(action);

    consumer.complete = false;
    consumer.repaint();
  },

  move({consumer, layers, hit, record}) {
    const rect = layers.stable.getBoundingClientRect();

    const action = {
      type: "line-to" as const,
      x: (hit.x - rect.left) / rect.width,
      y:  (hit.y - rect.top) / rect.height
    };
    consumer.record(action);

    consumer.repaint();
  },

  up({consumer}) {
    consumer.complete = true;
    consumer.repaint();
  }
} as Tool;

import {Tool} from "./index";

const eraserSize = 2;

const {floor} = Math;

export default {
  name: "eraser",

  hover({layers, hit}) {
    const canvas = layers.aid;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000";
    ctx.setLineDash([6, 4]);

    ctx.beginPath();
    ctx.arc(
      floor(hit.x - rect.left),
      floor(hit.y - rect.y),
      floor(eraserSize / 100 * rect.width),
      0,
      2 * Math.PI
    );
    ctx.stroke();
  },

  down({consumer, layers, hit, record}) {
    const canvas = layers.stable;
    const rect = canvas.getBoundingClientRect();

    const action = {
      type: "erase" as const,
      x: (hit.x - rect.left) / rect.width,
      y:  (hit.y - rect.top) / rect.height,
      r: 0.02
    };
    consumer.record(action);
    consumer.repaint();
  },

  move({consumer, layers, hit}) {
    const canvas = layers.stable;
    const rect = canvas.getBoundingClientRect();

    const action = {
      type: "erase" as const,
      x: (hit.x - rect.left) / rect.width,
      y:  (hit.y - rect.top) / rect.height,
      r: 0.02
    };
    consumer.record(action);
    consumer.repaint();
  }
} as Tool;

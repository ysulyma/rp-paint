import {Action} from "./actions";
import {Color} from "./types";

import type {Playback, ReplayData} from "liqvid";

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

export interface Handler {
  type: string;
  configure?: () => void;
  preprocess?: (this: Consumer, action: Action) => boolean;
  process?: (this: Consumer, action: Action) => boolean;
}

/* handlers */
import {SheetHandler} from "./handlers/change-sheet";
import {ClearHandler} from "./handlers/clear";
import {MoveToHandler, SetStrokeHandler} from "./handlers/drawing";
import {EraseHandler} from "./handlers/erase";

const handlers = {} as {
  [key: string]: Handler;
};

for (const handler of [ClearHandler, EraseHandler, MoveToHandler, SetStrokeHandler, SheetHandler]) {
  handlers[handler.type] = handler;
}

/**
  Consumer class.
*/
export class Consumer {
  complete: boolean;
  feed: Action[];
  contexts: {
    [key: string]: CanvasRenderingContext2D;
  };
  layers: {
    [key: string]: HTMLCanvasElement;
  };
  state: {
    activeSheet: number;
    numSheets: number;
    lineWidth: number;
    strokeStyle: Color;
  };

  i: number;
  index: number;

  constructor(opts = {} as Partial<Pick<Consumer, keyof Consumer>>) {
    Object.assign(this, 
    {
      complete: true,
      i: 0,
      index: 0,
      state: {
        activeSheet: 0,
        numSheets: 1,
        lineWidth: 2,
        strokeStyle: "#000000"
      }
    }, opts);

    this.contexts = {};
    this.complete = true;
  }

  /**
    Consume tokens until the test fails.
  */
  consume({test}: ConsumeArgs): [Action[], boolean] {
    const vals = [];
    for (; this.i+1 < this.feed.length; ++this.i) {
      const action = this.feed[this.i+1] as Action;

      if (!test(action))
        return [vals, true];

      vals.push(action);
    }
    return [vals, this.complete];
  }

  preprocess() {
    this.complete = false;
    let needsPreprocessing = Object.keys(handlers).filter(key => handlers[key].preprocess).length;

    for (let k = this.feed.length - 1; k >= 0; --k) {
      const action = this.feed[k];
      if (!handlers.hasOwnProperty(action.type))
        continue;

      const handler = handlers[action.type];
      if (!handler.hasOwnProperty("preprocess"))
        continue;

      if (handler.preprocess.call(this, action))
        needsPreprocessing--;
      if (needsPreprocessing === 0)
        break;
    }
  }

  process() {
    for (; this.i < this.feed.length; ++this.i) {
      const action = this.feed[this.i];

      if (!handlers.hasOwnProperty(action.type))
        continue;
      const handler = handlers[action.type];
      if (!handler.hasOwnProperty("process"))
        continue;

      const complete = handler.process.call(this, action);

      if (complete) {
        this.index = this.i+1;
      } else {
        break;
      }
    }
  }

  record(action: Action) {
    this.feed.push(action);
  }

  /**
    Clear all the layers.
  */
  reset() {
    this.index = 0;
    for (const key in this.layers) {
      const layer = this.layers[key];
      const ctx = layer.getContext("2d");
      ctx.clearRect(0, 0, layer.width, layer.height);
    }
  }

  repaint(reset = false) {
    if (!this.contexts.hasOwnProperty("temp")) {
      for (const key in this.layers) {
        this.contexts[key] = this.layers[key].getContext("2d");
      }
    }

    if (reset) {
      this.reset();
    }

    this.i = this.index;

    this.preprocess();

    // clear temp layer
    this.contexts.temp.clearRect(0, 0, this.layers.temp.width, this.layers.temp.height);

    this.process();
  }
}

function fmt(o: unknown) {
  return JSON.stringify(o);
}
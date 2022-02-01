import * as React from "react";
import {useMemo, useState} from "react";

import type {ReplayData} from "liqvid";

import {ReplayDataRecorder} from "rp-recording";
import type {RecorderPlugin} from "rp-recording";

import {Action} from "./actions";
import {Brush as icon} from "./images";

class BrushRecorder extends ReplayDataRecorder<Action> {
  beginRecording() {
    this.push([0, {type: "change-sheet", sheet: 0}]);
    this.push([0, {type: "set-stroke-style", strokeStyle: "#FFF"}]);
  }

  captureAction(action: Action) {
    if (!this.manager || this.manager.paused)
      return;

    this.capture(this.manager.getTime(), action);
  }
}

function BrushSaveComponent(props: {data: ReplayData<Action>;}) {
  return (
    <>
    {props.data ?
      <textarea readOnly value={JSON.stringify(props.data)}></textarea> :
      "Brush data not yet available."
    }
    </>
  );
}

export default {
  key: "rp-paint",
  icon,
  name: "Paint",
  recorder: new BrushRecorder,
  saveComponent: BrushSaveComponent
} as RecorderPlugin;

function format(x: unknown): unknown {
  if (x instanceof Array) {
    return x.map(format);
  } else if (typeof x === "object") {
    const y = {};
    for (const key of Object.keys(x))
      y[key] = format(x[key]);
    return y;
  } else if (typeof x === "number") {
    return parseFloat(x.toFixed(5));
  }
  return x;
}

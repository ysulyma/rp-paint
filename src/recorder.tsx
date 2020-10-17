import * as React from "react";

import {Player, Utils, ReplayData} from "ractive-player";
const {bind} = Utils.misc;

import {Recorder, RecorderPlugin, RecorderConfigureComponent} from "rp-recording";

import {Action} from "./actions";
import {Brush as BrushIcon} from "./images";

type BrushEvent =
  ["clear"] |
  ["color", string] |
  ["line", number, number] |
  ["move", number, number];

interface Canvas {
  beginRecording(): void;
  endRecording(): ReplayData<Action>;
  onKeyDown(e: KeyboardEvent): void;
  onMouseDown(e: React.MouseEvent<HTMLCanvasElement>): void;
  onMouseMove(e: React.MouseEvent<HTMLCanvasElement>): void;
  onMouseUp(e: React.MouseEvent<HTMLCanvasElement>): void;
  events: BrushEvent[];
}

class BrushRecorder implements Recorder {
  private captureData: ReplayData<Action>;

  private captureStart: number;
  private pauseTime: number;
  private lastPauseTime: number;
  private paused: boolean;

  // fuck
  static instance?: BrushRecorder;

  constructor() {
    this.capture = this.capture.bind(this);
    BrushRecorder.instance = this;
  }

  capture(action: Action) {
    const t = this.getTime();
    if (this.paused) return;

    this.captureData.push([
      t,
      action
      // [].map(formatNum) as [number, number]
    ]);
  }

  beginRecording(baseTime: number) {
    // begin new capturing
    this.captureData = [];
    this.captureStart = baseTime;
    this.pauseTime = 0;
    this.paused = false;
  }

  pauseRecording(time: number) {
    this.paused = true;
    this.lastPauseTime = time;
  }

  resumeRecording(time: number) {
    this.pauseTime += time - this.lastPauseTime;
    this.paused = false;
  }

  async endRecording(): Promise<ReplayData<BrushEvent>> {
    return format(this.captureData);
  }

  finalizeRecording(startDelay: number) {
    for (const datum of this.captureData) {
      datum[0] -= startDelay;
    }
    this.captureData = this.captureData.filter(_ => _[0] >= 0);

    // convert to relative times (reduces filesize)
    for (let i = this.captureData.length - 1; i >= 1; --i) {
      this.captureData[i][0] -= this.captureData[i-1][0];
    }
    for (let i = 0; i < this.captureData.length; ++i) {
      this.captureData[i][0] = formatNum(this.captureData[i][0]);
    }
    return format(this.captureData);
  }

  getTime() {
    return performance.now() - this.captureStart - this.pauseTime;
  }
}

class BrushConfigureComponent extends RecorderConfigureComponent {
  render() {
    const classNames = ["recorder-plugin-icon"];

    if (this.state.active)
      classNames.push("active");

    return (
      <div className="recorder-plugin" title="Record brush">
        <BrushIcon
          className={classNames.join(" ")}
          height="36" width="36"
          style={{verticalAlign: "middle"}}
          onClick={this.toggleActive}
        />
        <span className="recorder-plugin-name">Brush</span>
      </div>
    );
  }
}

function BrushSaveComponent(props: {data: ReplayData<Action>}) {
  return (
    <>
      <th key="head" scope="row">
        <BrushIcon/>
      </th>
      <td key="cell">
        {props.data ?
          <textarea readOnly value={JSON.stringify(props.data)}></textarea> :
          "Brush data not yet available."
        }
      </td>
    </>
  );
}

export default {
  name: "BrushRecorder",
  recorder: BrushRecorder,
  configureComponent: BrushConfigureComponent,
  saveComponent: BrushSaveComponent
} as RecorderPlugin;

// stupid helper function
function offsetParent(node: HTMLElement) {
  if (node.offsetLeft !== undefined && node.offsetTop !== undefined) return { left: node.offsetLeft, top: node.offsetTop };

  const rect = node.getBoundingClientRect();

  let parent = node;
  while (parent = (parent.parentNode as HTMLElement)) {
    if (parent.nodeName.toLowerCase() === "main") {
      console.log("MAIN");
    }
    if (!["absolute", "relative"].includes(getComputedStyle(parent).position)) continue;

    const prect = parent.getBoundingClientRect();

    return { left: rect.left - prect.left, top: rect.top - prect.top };
  }

  return { left: rect.left, top: rect.top };
}

function format(x: any): any {
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

function formatNum(x: number): number {
  return parseFloat(x.toFixed(5));
}

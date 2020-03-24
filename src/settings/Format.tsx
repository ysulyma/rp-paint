import * as React from "react";
import {useCallback, useContext, useMemo, useRef, useState} from "react";

import {Utils} from "ractive-player";
const {onClick} = Utils.mobile;

import {PaintContext} from "../Paint";

export default function Format() {
  const state = useContext(PaintContext);

  const classNames = ["rp-paint-tool"];
  if (state.tool === "eraser") {
    classNames.push("selected");
  }

  const events = useMemo(() => onClick(() => {
    console.log("set stroke style");
    const action = {
      type: "set-stroke-style",
      strokeStyle: "#F00"
    };
    state.record(action);

    // state.uiDispatch({
    //   type: "set-stroke-style",
    //   strokeStyle: "#F00"
    // });
  }), []);
  return (
    <button className="rp-paint-tool rp-paint-format" {...events}/>
  );
}

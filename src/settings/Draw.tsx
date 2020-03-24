import * as React from "react";
import {useCallback, useContext, useMemo, useRef, useState} from "react";

import {Utils} from "ractive-player";
const {onClick} = Utils.mobile;

import {Brush} from "../images";
import {PaintContext} from "../Paint";

export default function Draw() {
  const state = useContext(PaintContext);

  const classNames = ["rp-paint-tool"];
  if (state.tool === "draw")
    classNames.push("selected");

  const events = useMemo(() => onClick(() => {
    state.uiDispatch({
      type: "set-tool",
      name: "draw"
    });
  }), []);

  return (
    <button className={classNames.join(" ")} {...events}>
      <Brush/>
    </button>
  );
}

import * as React from "react";
import {useContext, useMemo, useRef, useState} from "react";

import {Utils} from "ractive-player";
const {onClick} = Utils.mobile;

import {Eraser as Icon} from "../images";
import {PaintContext} from "../Paint";

export default function Eraser() {
  const state = useContext(PaintContext);

  const classNames = ["rp-paint-tool"];
  if (state.tool === "eraser") {
    classNames.push("selected");
  }

  const events = useMemo(() => onClick(() => {
    state.uiDispatch({
      type: "set-tool",
      name: "eraser"
    });
  }), []);

  return (
    <button className={classNames.join(" ")} {...events}>
      <Icon/>
    </button>
  );
}

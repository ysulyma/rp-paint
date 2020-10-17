import * as React from "react";
import {useCallback, useContext, useEffect, useMemo, useRef, useState} from "react";

import {Utils} from "ractive-player";
const {onClick} = Utils.mobile;

import {Brush} from "../images";
import {PaintContext} from "../Canvas";

interface Props {
  listen: (fn: (e: KeyboardEvent) => void) => void;
}

const KEYCODES = {
  d: 68
};

export default function Draw(props: Props) {
  const {dispatch, $state} = useContext(PaintContext);

  useEffect(() => {
    props.listen(e => {
      if (e.altKey && e.keyCode === KEYCODES.d) {
        e.preventDefault();
        e.stopPropagation();

        dispatch({
          type: "set-tool",
          name: "draw"
        });
      }
    });
  }, []);

  const classNames = ["rp-paint-tool"];
  if ($state.current.tool === "draw")
    classNames.push("selected");

  const events = useMemo(() => onClick(() => {
    dispatch({
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

import * as React from "react";
import {useContext, useEffect, useMemo, useRef, useState} from "react";

import {Utils} from "ractive-player";
const {onClick} = Utils.mobile;

import {Eraser as Icon} from "../images";
import {PaintContext} from "../Canvas";

interface Props {
  listen: (fn: (e: KeyboardEvent) => void) => void;
}

const KEYCODES = {
  c: 67,
  e: 69 /* nice */
};

export default function Eraser(props: Props) {
  const {consumer, dispatch, $state} = useContext(PaintContext);

  useEffect(() => {
    props.listen(e => {
      if (e.altKey && !e.metaKey && e.keyCode === KEYCODES.e) {
        e.preventDefault();
        e.stopPropagation();

        dispatch({
          type: "set-tool",
          name: "eraser"
        });
      } else if (e.altKey && !e.metaKey && e.keyCode === KEYCODES.c) {
        e.preventDefault();
        e.stopPropagation();

        consumer.record({
          type: "clear"
        });
        consumer.repaint();
      }
    });
  }, []);

  const classNames = ["rp-paint-tool"];
  if ($state.current.tool === "eraser") {
    classNames.push("selected");
  }

  const events = useMemo(() => onClick(() => {
    dispatch({
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

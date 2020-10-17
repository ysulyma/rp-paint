import * as React from "react";
import {useCallback, useContext, useEffect, useMemo, useRef, useState} from "react";

import {Player, Utils, ReplayData} from "ractive-player";
const {replay} = Utils.animation,
      {dragHelperReact} = Utils.interactivity,
      {between} = Utils.misc,
      {onClick} = Utils.mobile;

import type {UIAction} from "./actions";
import {offsetParent} from "./utils";

import {PaintContext} from "./Canvas";
import Draw from "./settings/Draw";
import Eraser from "./settings/Eraser";
import Format from "./settings/Format";
import Sheets from "./settings/Sheets";

interface Props {
  dispatch: React.Dispatch<UIAction>;
}

export default function PaintSettings() {
  const {consumer} = useContext(PaintContext);
  const player = useContext(Player.Context);
  const ref = useRef<HTMLElement>();
  const [open, setOpen] = useState(false);

  const listeners = useRef<((e: KeyboardEvent) => void)[]>([]);

  const listen = useCallback((fn: (e: KeyboardEvent) => void) => {
    listeners.current.push(fn);
  }, []);

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "p") {
        return setOpen(prev => !prev);
      } else if (e.key === "h") {
        parentsUntil(ref.current, ".rp-paint-canvas-container").classList.toggle("visible");
      } else if (e.key === "z" && e.metaKey) {
        consumer.record({
          type: "undo"
        });
      }

      for (const listener of listeners.current)
        listener(e);
    };

    document.body.addEventListener("keydown", listener);

    return () => {
      document.body.removeEventListener("keydown", listener);
    };
  }, [open]);

  const dragEvents = useMemo(() => {
    let lastX: number, lastY: number;
    return dragHelperReact<HTMLDivElement>(
      (e, hit) => {
        const offset = offsetParent(ref.current);

        const x = offset.left + hit.x - lastX,
              y = offset.top + hit.y - lastY,
              left = x / offset.width * 100,
              top = y / offset.height * 100;

        lastX = hit.x;
        lastY = hit.y;

        Object.assign(ref.current.style, {
          left: `${left}%`,
          top: `${top}%`
        });
      },
      (e, hit) => {
        lastX = hit.x;
        lastY = hit.y;
      }
    );
  }, []);

  return (
    <aside className="rp-paint-settings" ref={ref} style={{display: open ? "block" : "none"}}>
      <div className="rp-paint-drag-handle" {...dragEvents}></div>
      <Draw {...{listen}}/>
      <Eraser {...{listen}}/>
      <Format {...{listen}}/>
      <Sheets {...{listen}}/>
    </aside>
  );
}

function parentsUntil(node: HTMLElement, selector: string): HTMLElement {
  if (!node) return undefined;
  if (node.matches(selector)) return node;
  return parentsUntil(node.parentNode as HTMLElement, selector);
}

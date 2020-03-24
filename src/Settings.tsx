import * as React from "react";
import {useCallback, useContext, useMemo, useRef, useState} from "react";

import {Player, Utils, ReplayData} from "ractive-player";
const {replay} = Utils.animation,
      {dragHelperReact} = Utils.interactivity,
      {between} = Utils.misc,
      {onClick} = Utils.mobile;

import {offsetParent} from "./utils";
import {PaintContext} from "./Paint";

import Draw from "./settings/Draw";
import Eraser from "./settings/Eraser";
import Format from "./settings/Format";
import Sheets from "./settings/Sheets";

interface Props {
  dispatch: (x: any) => void;
}

export default function PaintSettings() {
  const ref = useRef<HTMLElement>();

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
    <aside className="rp-paint-settings" ref={ref}>
      <div className="rp-paint-drag-handle" {...dragEvents}></div>
        <Draw/>
        <Eraser/>
        <Format/>
        <Sheets/>
      {/*<ul>
        {palette.map(color => (
          <li key={color} className={color === stroke ? "selected" : ""}>
            <input
              name="stroke-color" type="radio" value={color}
              style={{backgroundColor: color}}
              {...onClick(() => dispatch({type: "set-stroke", stroke: color}))}
            />
          </li>
        ))}
      </ul>*/}
    </aside>
  );
}

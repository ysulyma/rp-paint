import * as React from "react";
import {useCallback, useContext, useEffect, useMemo, useRef, useState} from "react";

import {Utils} from "ractive-player";
const {between} = Utils.misc,
      {onClick} = Utils.mobile;

import {SetStrokeStyle} from "../actions";
import {PaintContext} from "../Canvas";

interface Props {
  listen: (fn: (e: KeyboardEvent) => void) => void;
}

export default function Format(props: Props) {
  const [open, setOpen] = useState(false);
  const {consumer, $state, dispatch} = useContext(PaintContext);
  const state = $state.current;

  const $palette = useRef([
    "#ffffff",
    "#ff0000",
    "#1a69b5",
    "#008000",
    "#ae81ff",
    "#ff8000",
    "#ff0080"
  ]);
  const [palette, setPalette] = useState($palette.current);
  $palette.current = palette;

  useEffect(() => {
    props.listen(e => {
      if (e.altKey && !e.metaKey && between(49, e.keyCode, 49 + palette.length)) {
        e.preventDefault();
        e.stopPropagation();

        const action = {
          type: "set-stroke-style" as const,
          strokeStyle: $palette.current[e.keyCode - 49]
        };
        consumer.record(action);
        dispatch(action);
      } else if (e.altKey && e.key === "h") {
        document.querySelectorAll(".rp-paint-replay")
      }
    });
  }, []);

  const openDialog = useMemo(() => onClick(() => {
    setOpen(prev => !prev);
  }), []);

  const selectColor = useMemo(() => ({
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      const color = e.currentTarget.value;

      const i = e.currentTarget.name.match(/^palette-(\d+)$/)[1];
      setPalette(prev => {
        const ret = prev.slice();
        ret[i] = color;
        return ret;
      });
    }
  }), []);
  
  return (
    <>
      <aside className="rp-paint-palette" style={{display: open ? "block" : "none"}}>
        {palette.map((color, i) =>
          <div className="rp-paint-color" key={i}>
            <input
              {...selectColor}
              name={`palette-${i}`}
              type="color" value={color}/>
            <kbd>{i+1}</kbd>
          </div>
        )}
      </aside>
      <button
        className="rp-paint-tool rp-paint-format"
        {...openDialog}
        style={{backgroundColor: state.strokeStyle}}
      />
    </>
  );
}

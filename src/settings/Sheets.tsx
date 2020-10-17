import * as React from "react";
import {useCallback, useContext, useEffect, useMemo, useRef, useState} from "react";

import {Utils} from "ractive-player";
const {range} = Utils.misc,
      {onClick} = Utils.mobile;

import {Sheets as Icon} from "../images";
import {PaintContext} from "../Canvas";

interface Props {
  listen: (fn: (e: KeyboardEvent) => void) => void;
}

export default function Sheets(props: Props) {
  const {consumer} = useContext(PaintContext);
  const [open, setOpen] = useState(false);
  const snapshots = useRef<string[]>([]);

  useEffect(() => {
    props.listen(e => {
      if (!e.altKey) return;

      if (e.key === "ArrowDown") {
        snapshots.current[consumer.state.activeSheet] = consumer.layers.stable.toDataURL();

        const action = {
          type: "change-sheet" as const,
          sheet: consumer.state.activeSheet + 1
        };
        consumer.record(action);
        consumer.repaint(true);
      } else if (e.key === "ArrowUp") {
        if (consumer.state.activeSheet === 0)
          return;

        snapshots.current[consumer.state.activeSheet] = consumer.layers.stable.toDataURL();

        const action = {
          type: "change-sheet" as const,
          sheet: consumer.state.activeSheet - 1
        };
        consumer.record(action);
        consumer.repaint(true);
      }
    });
  }, []);

  const classNames = ["rp-paint-tool"];

  const openDialog = useMemo(() => onClick(() => {
    setOpen(prev => {
      if (!prev)
        snapshots.current[consumer.state.activeSheet] = consumer.layers.stable.toDataURL();
      return !prev;
    });
  }), []);

  return (
    <>
      <aside className="rp-sheets-dialog" style={{display: open ? "block" : "none"}}>
        <ol>
          {range(consumer.state.numSheets).map(i => (
            <li className={i === consumer.state.activeSheet ? "selected" : ""} key={i}>
              <img src={snapshots.current[i]}/>
            </li>
          ))}
        </ol>
      </aside>
      <button className={classNames.join(" ")} {...openDialog}>
        <Icon/>
      </button>
    </>
  );
}

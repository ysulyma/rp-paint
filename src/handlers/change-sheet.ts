import {ChangeSheet, SetTool} from "../actions";
import type {Consumer, Handler} from "../Consumer";

export const SheetHandler: Handler = {
  type: "change-sheet" as const,

  preprocess(this: Consumer, action: ChangeSheet) {
    this.state.activeSheet = action.sheet;
    return true;
  },

  process(this: Consumer, action: ChangeSheet) {
    const {state} = this;

    if (action.sheet >= this.state.numSheets) {
      this.state.numSheets = action.sheet + 1;
    }
    if (action.sheet !== this.state.activeSheet) {
      const [_, complete] = this.consume({
        test: act => act.type !== "change-sheet"
      });
      if (!complete) {
        // this.state.activeSheet = action.sheet;
        // this.repaint(true);
      }
    }
    return true;
  }
}

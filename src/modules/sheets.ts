import {Action} from "../actions";
import {} from "../types";

export const SheetHandler = {
  preprocess(action: Action) {
    if (action.type !== "change-sheet")
      return;
  },

  process(action: Action) {
    if (action.type !== "change-sheet")
      return;

    if (action.sheet >= state.sheets.length) {
      state.sheets.length = action.sheet;
    }
    if (action.sheet !== state.activeSheet) {
      const [_, complete] = consume({
        test: act => act.type !== "change-sheet"
      });
      if (!complete) {
        state.activeSheet = action.sheet;
        state.repaint(undefined, true);
      }
    }
    return true;
  }
}

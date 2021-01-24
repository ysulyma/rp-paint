# rp-paint

Doodling recorder and replayer for [ractive-player](https://github.com/ysulyma/ractive-player)/[rp-recording](https://github.com/ysulyma/rp-recording/).

Very beta! Use at your own risk.

## Installation

    $ npm install rp-paint

## Usage

```tsx
import {Audio, Controls, IdMap, Script, Player} from "ractive-player";
import {RecordingControl} from "rp-recording";

import {PaintCanvas, PaintReplay} from "rp-paint";
import PaintRecorderPlugin from "rp-paint/recorder";

import {brushReplay} from "./recordings";

// controls
const controls = (<>
  {Player.defaultControlsLeft}

  <div className="rp-controls-right">
    <RecordingControl plugins={[PaintRecorderPlugin]}/>

    {Player.defaultControlsRight}
  </div>
</>);

/* ... */

<Player controls={controls} script={script}>
  {/* to record */}
  <PaintCanvas recorder={PaintRecorderPlugin.recorder}/>

  {/* to replay */}
  <PaintReplay replay={brushReplay} start={0}/>
</Player>
```

## Controls

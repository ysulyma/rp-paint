# rp-paint

Doodling recorder and replayer for [Liqvid](https://liqvidjs.org)/[rp-recording](https://github.com/ysulyma/rp-recording/).

Alpha version! Use at your own risk.

## Installation

    $ npm install rp-paint

## Usage

```tsx
import {Controls, Script, Player} from "liqvid";
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

## Keyboard controls

<table>
  <tbody>
    <tr>
      <td><kbd>Alt+&darr;</kbd></td>
      <td>Down one layer</td>
    </tr>
    <tr>
      <td><kbd>Alt+&uarr;</kbd></td>
      <td>Up one layer</td>
    </tr>
    <tr>
      <td><kbd>Alt+[number]</kbd></td>
      <td>Select color by number</td>
    </tr>
    <tr>
      <td><kbd>Alt+C</kbd></td>
      <td>Clear layer</td>
    </tr>
    <tr>
      <td><kbd>Alt+D</kbd></td>
      <td>Draw tool</td>
    </tr>
    <tr>
      <td><kbd>Alt+E</kbd></td>
      <td>Eraser tool</td>
    </tr>
    <tr>
      <td><kbd>Alt+H</kbd></td>
      <td>Toggle paint canvas</td>
    </tr>
    <tr>
      <td><kbd>Alt+P</kbd></td>
      <td>Toggle settings</td>
    </tr>
  </tbody>
</table>

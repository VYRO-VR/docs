---
title: LED Codes
description: What each LED pattern on an IBIS tracker means.
---

The IBIS tracker has a single LED that uses different on/off patterns to communicate state. Use this page as a reference when something looks off.

## Button-driven states

These are the patterns VYRO VR documents for current shipping firmware (see the [vyrovr.com setup guide](https://vyrovr.com/setup)):

| Pattern | Meaning |
|---|---|
| LED comes on after a single press | Powered on and broadcasting |
| Flashing **once per second** | **Pairing mode** (3 presses) — see [Pairing](/trackers/pairing/). A single press, or a power-cycle, exits it |
| One flash → **solid** → **4 rapid flashes** | **Side calibration** (2 presses) in progress, then succeeded. Keep the tracker still on a flat surface until the 4 flashes |
| Solid then fades out, **or** just fades out, when you hold the button | Powering off (which one you see depends on firmware version) |
| Slow fade / pulse, and a USB drive appears when plugged into a PC | **DFU mode** (4–5 presses) — see [DFU Mode](/firmware/dfu-mode/) |

After power-on, the LED goes quiet once the tracker is connected to the receiver and streaming normally. If a tracker is on but never shows up in the SlimeVR Server, work through [Tracker Won't Pair](/troubleshooting/tracker-not-pairing/).

## Charging states

When the tracker is sitting in the charging dock or on a USB-C cable:

| Pattern | Meaning |
|---|---|
| Charging LED on | Currently charging |
| Charging LED off (with USB plugged in) | Fully charged, or no charge current — reseat the tracker if it was empty |

## Battery warnings

| Pattern | Meaning |
|---|---|
| Tracker drops off and won't power back on | Battery empty; recharge before retrying |

:::note[Unconfirmed]
Earlier versions of this page listed a "periodic double-blink" low-battery pattern. We haven't confirmed that against current firmware, so treat the SlimeVR Server's battery readout as the reliable indicator. If your tracker's LED is doing something you can't find here, post a short clip in the [VYRO VR Discord](https://discord.gg/vyrovr) — easiest way to identify it and improve this page.
:::

## See also

- [Pairing](/trackers/pairing/)
- [Powering On & Off](/trackers/powering-on-off/)
- [Charging](/charging-and-battery/charging/)
- [IBIS Overview](/trackers/ibis-overview/) for the button table

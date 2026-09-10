---
title: DFU Mode
description: What DFU mode is, how to enter (and exit) it, and when you'd want to.
---

**DFU** stands for **Device Firmware Update**. It's a special boot mode where the tracker only runs its **UF2 bootloader**, not normal firmware. While in DFU mode the tracker shows up on your PC as a small USB drive, and you update it by copying a `.uf2` firmware file onto that drive — including recovery from a botched flash.

You should not enter DFU mode by accident. If you did, follow the **exit** section below.

## When you actually want DFU mode

- You're updating firmware — see [Updating Firmware](/firmware/updating/)
- A firmware update failed mid-way and the tracker won't boot normally
- You're flashing a development firmware build

## How to enter DFU mode

**Press the button 4 or 5 times** in quick succession. The tracker enters DFU mode and the LED changes to a slow fade/pulse.

Plug it in over USB-C (a data cable, not charge-only) and your OS will mount a small drive named **`NICENANO`** or **`SLIMEVRTRK`**. Nothing else is needed — no drivers, no programmer app.

## How to exit DFU mode (you didn't mean to enter it)

**Power-cycle** the tracker:

1. Unplug it from USB if it's plugged in
2. **Hold the button** until any LED activity stops
3. **Single-press** to power on normally

The tracker boots into normal firmware. Crisis averted. If it keeps returning to the bootloader, the firmware image is damaged — re-flash it (below).

## DFU mode does not erase your tracker

Entering DFU mode is non-destructive. Pairing, calibration, and stored config all survive. The only way to lose those is to actually flash a different firmware image — and even then, re-pairing is fast.

## Recovering from a failed flash

If a firmware update failed and the tracker is stuck:

1. Confirm it's in DFU mode (slow fade LED, USB drive shows up when plugged into PC). If not, press the button 4–5 times.
2. Copy the **previous known-good `.uf2`** (or the correct build for your tracker revision) onto the drive.
3. Wait for the drive to disappear, then power-cycle.
4. Re-pair if needed: [Pairing](/trackers/pairing/).

If the tracker isn't appearing as a USB drive at all (no fade, no drive), check the cable first — many "dead" trackers are charge-only USB-C cables. Then try a different USB port. If it still won't mount, reach out via [support](/support/).

## Receivers

The receiver has the same UF2 bootloader. Enter it with the `dfu` serial command (via nRF Connect Serial Terminal or SmolSlimeConfigurator) and copy the receiver `.uf2` onto the drive that appears. Details in [Updating Firmware](/firmware/updating/).

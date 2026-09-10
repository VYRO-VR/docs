---
title: Updating Firmware
description: Update the firmware on your IBIS trackers and receiver.
---

IBIS trackers and receivers run the open-source SlimeVR nRF ("Smol Slime") firmware. Updates ship often with bug fixes and new features. Updating is **optional** — your hardware works fine on whatever firmware it shipped with.

:::caution[VYRO VR's advice: don't update "just because"]
The nRF firmware is under active development and updates land almost daily. Flashing the wrong image can soft-brick a tracker (recoverable, but a hassle). VYRO VR ships the latest **stable** build and recommends updating only when there's a fix you need or the [Discord](https://discord.gg/vyrovr) **#documentation** channel flags an important release.
:::

:::caution[Do not use the SlimeVR Server's firmware updater]
The **Update firmware** button inside the SlimeVR Server is for official Wi-Fi (ESP-based) SlimeVR trackers. It does **not** apply to IBIS trackers or their receiver. Use the steps on this page instead.
:::

## Trackers and receiver must match

Trackers only pair with a receiver running the **same firmware version**. So:

- Update **all** your trackers and the receiver together, to the same release.
- A replacement receiver arrives on the latest firmware — update your trackers to match before trying to pair.
- After updating, expect to re-pair if anything doesn't reconnect on its own.

## Get the right firmware file

Firmware for IBIS is a **`.uf2`** file. Get it from the link VYRO VR posts in the Discord for your tracker revision. There are separate builds for trackers and receivers, and for different IMUs and board layouts — flashing a build meant for different hardware is how trackers get soft-bricked. If you're unsure which file you need, ask in Discord before flashing.

## Updating a tracker

Trackers flash by drag-and-drop over USB — no special software needed.

1. Plug the tracker into your PC with a **USB-C data cable** (some charge-only cables won't work).
2. Put the tracker into **DFU mode**: press the button **4–5 times** in quick succession. See [DFU Mode](/firmware/dfu-mode/).
3. A small USB drive named **`NICENANO`** (or **`SLIMEVRTRK`**, depending on bootloader version) appears in File Explorer / Finder.
4. **Copy the `.uf2` file onto that drive.** The drive disappears on its own when the copy finishes and the tracker reboots into the new firmware.
5. Do **not** unplug mid-copy. If the copy fails or the drive reappears immediately, the file was rejected — check you have the right build and try again.
6. Repeat for every tracker in the set.

Pairing normally survives a firmware update as long as the receiver is on the same version. If a tracker doesn't reconnect, re-pair it: [Pairing](/trackers/pairing/).

## Updating the receiver

The receiver uses the same UF2 bootloader.

1. Plug the receiver into your PC.
2. Put it into DFU mode. Either:
   - open **nRF Connect for Desktop → Serial Terminal** (or **SmolSlimeConfigurator**), connect to the receiver's serial port, and send `dfu`; or
   - on a receiver with a physical button, hold the button while plugging it in (double-tap the reset on bare boards).
3. A USB drive appears. **Copy the receiver `.uf2` file onto it.** The receiver reboots when done.
4. Reconnect with Serial Terminal and send `info` to confirm the version.
5. Update your trackers to the same version if they aren't already, then re-launch the SlimeVR Server and confirm everything reconnects.

## Checking versions

- **Receiver:** `info` over the serial terminal.
- **Tracker:** plug it in over USB-C, connect Serial Terminal to its port, and send `info`. SmolSlimeConfigurator shows the same.

## If an update fails mid-flash

A tracker or receiver interrupted mid-copy simply stays in the bootloader — the USB drive will still be there (or reappears after a power-cycle into DFU mode). Copy the previous known-good `.uf2` back on. See [DFU Mode](/firmware/dfu-mode/) for the recovery walk-through.

## Rolling back

Rolling back is the same procedure with an older `.uf2`. Keep the file you flashed last time somewhere safe so you can go back if a new build misbehaves.

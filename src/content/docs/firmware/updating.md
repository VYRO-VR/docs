---
title: Updating Firmware
description: Update the firmware on your IBIS trackers and receiver with VYRO VR Preflight.
---

IBIS trackers and receivers run VYRO VR's build of the open-source SlimeVR nRF ("Smol Slime") firmware. VYRO VR publishes a build for every board it sells at [github.com/VYRO-VR/Firmware](https://github.com/VYRO-VR/Firmware/releases), and the recommended way to install it is **VYRO VR Preflight**, VYRO's desktop setup app. Updating is **optional** — your hardware works fine on whatever firmware it shipped with.

:::caution[VYRO VR's advice: don't update "just because"]
Firmware updates can soft-brick a tracker (recoverable, but a hassle). Update only when there's a fix you need, when you're adding a tracker or receiver that's on a different version, or when the [Discord](https://discord.gg/vyrovr) **#documentation** channel flags an important release. Never disconnect anything mid-flash.
:::

:::caution[Do not use the SlimeVR Server's firmware updater]
The **Update firmware** button inside the SlimeVR Server is for official Wi-Fi (ESP-based) SlimeVR trackers. It does **not** apply to IBIS trackers or their receiver.
:::

## Trackers and receiver must match

Trackers only pair with a receiver running the **same firmware build**. So:

- Update **all** your trackers and the receiver together, to the same release.
- A replacement receiver arrives on the latest firmware — update your trackers to match before trying to pair.
- After updating, expect to re-pair if anything doesn't reconnect on its own.

Preflight checks this for you: it reads the build commit from the receiver and from every tracker the SlimeVR Server can see, and shows **Up to date** or **Update available** next to each.

## Install VYRO VR Preflight

1. Download the latest installer from [github.com/VYRO-VR/preflight/releases](https://github.com/VYRO-VR/preflight/releases/latest). Windows gets an installer and a portable `.exe`; there are also macOS (`.dmg`) and Linux (`.deb` / AppImage) builds.
2. Install and launch it. On macOS the build is unsigned, so right-click → **Open** the first time.
3. Have the **SlimeVR Server** running and your receiver plugged in via its extension cable. Preflight talks to the server for the live tracker list and to the receiver over its USB serial port.

Preflight's home screen offers **Pair New Trackers**, **Update Firmware**, **Calibrate Trackers**, **Gyro Sensitivity**, **Troubleshoot Connection Issues**, and a **Full Setup Guide** wizard. This page uses **Update Firmware**.

:::note
The one-click flashing steps below need Windows — Preflight watches for the tracker's bootloader drive by drive letter. On macOS and Linux the same page still shows you which firmware you're on and which file you need, and you copy the file onto the drive yourself (see [Manual update](#manual-update-without-preflight)).
:::

## Updating with Preflight

Open **Update Firmware**. The page has three sections:

### Latest firmware

Preflight fetches the newest stable release from the VYRO VR firmware repo and shows the **receiver build** and **tracker build** commits it contains. "View release notes" opens the release on GitHub.

### Receiver

1. Preflight finds your receiver on its serial port and reads its firmware **version, commit, build date, and board**. If it can't read them, unplug the receiver, plug it back in, and **Search again** (very old firmware can't report a version at all — updating fixes that too).
2. The **Status** row tells you whether it matches the latest release. If it does and you don't need to change anything, stop here. **Reinstall or change firmware** is there if you need to force it.
3. If an update is available, Preflight pre-selects your **receiver board** (Fox Dongle33 for the VYRO VR Receiver, Styria R1, HolyIOT 21017, and so on) and the matching file. Check the board is right — the wrong board's firmware is how receivers get bricked.
4. Tick **I understand updating may soft-brick the device** and click **Update receiver**. Preflight sends the receiver into update mode, waits for it to appear as a drive, copies the `.uf2` across, and reports the result. **Don't unplug the receiver until it finishes.** HolyIOT receivers have no drive; Preflight flashes those with its bundled DFU tool instead, which can take up to a minute.
5. When it's done, **Search again** to confirm the new version.

### Trackers

The tracker list comes from the SlimeVR Server, so power on the trackers you want to update. Each shows its firmware commit and whether it's up to date.

1. Click **Update a tracker** and check the pre-selected **tracker board** (Mochi for current IBIS 2.0 trackers).
2. Connect the tracker to your PC with a **USB-C data cable** — some charge-only cables won't work.
3. Press its button **4–5 times** in quick succession. The tracker reboots into its bootloader and appears as a small removable drive; Preflight lists it as soon as it shows up.
4. Tick the acknowledgement and click **Flash to (drive)**. Preflight downloads the `.uf2` and copies it onto the drive. The tracker reboots into the new firmware on its own and the drive disappears.
5. Repeat for every tracker in the set. Pairing survives the update as long as the receiver is on the same build.

If a tracker doesn't reconnect afterwards, re-pair it — **Pair New Trackers** in Preflight, or see [Pairing](/trackers/pairing/).

## Manual update (without Preflight)

The same thing by hand, for macOS, Linux, or if you'd rather not use the app:

1. Open the [latest firmware release](https://github.com/VYRO-VR/Firmware/releases/latest) and download the file for your board. Files are named `VVR_<Tracker|Receiver>_<Board>_<commit>.uf2` — for example `VVR_Tracker_Mochi_<commit>.uf2` for a current IBIS tracker, or `VVR_Receiver_Fox_Dongle33_<commit>.uf2` for the VYRO VR Receiver. Not sure which board you have? Preflight's Update Firmware page names it, or ask in Discord.
2. **Tracker:** plug it in over USB-C and press the button 4–5 times. **Receiver:** send `dfu` over its serial console (nRF Connect Serial Terminal or SmolSlimeConfigurator). Either way a small USB drive appears — `MOCHI`, `SLIMENRF`, `NICENANO`, `SLIMEVRTRK`, or `FOX-BOOT` depending on the board.
3. Copy the `.uf2` onto that drive. The drive disappears when the copy finishes and the device reboots into the new firmware.
4. Do **not** unplug mid-copy. If the drive reappears immediately, the file was rejected — check you have the right board's build and try again.

HolyIOT receivers don't expose a drive; their release asset is a Secure DFU `.zip` that needs `nrfutil` (bundled in Preflight) — use Preflight for those.

## Checking versions

- **Preflight → Update Firmware** shows everything in one place.
- **Receiver:** `info` over the serial console prints the version, commit, build date, and board target.
- **Tracker:** the SlimeVR Server's tracker details show the firmware string, which ends in the build commit.

## If an update fails mid-flash

A tracker or receiver interrupted mid-copy simply stays in the bootloader — the drive will still be there (or reappears after you re-enter DFU mode). Run the update again, or copy the previous known-good `.uf2` back on. See [DFU Mode](/firmware/dfu-mode/) for the recovery walk-through.

## Rolling back

Older releases stay on the [firmware releases page](https://github.com/VYRO-VR/Firmware/releases). Download the earlier file for your board and flash it the manual way. Roll back the receiver **and** the trackers, or they'll stop pairing.

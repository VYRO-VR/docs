---
title: IBIS Tracker Overview
description: Specs, controls, and at-a-glance reference for IBIS trackers.
---

The IBIS tracker (currently shipping as **Ibis 2.0**, 2026 revision with a physical button) is VYRO VR's SlimeVR-compatible full-body tracker. This page is a quick reference; deeper instructions live under the section pages.

## Specs

| | |
|---|---|
| Weight | ~11 g |
| Height | < 8 mm |
| Battery | 120 mAh lithium-polymer (401230 cell) |
| Battery life | 30–50 hours with constant movement; 50+ typical for social play; up to ~70 hours possible |
| IMU | ST LSM6DSV |
| Microcontroller | Nordic nRF52840 |
| Wireless | 2.4 GHz nRF ("Smol Slime" protocol) via the included USB receiver; range roughly 10 m / your playspace |
| Charging | USB-C, 5 V; via the 10-port charging dock or any USB-C cable |
| Auto-sleep | After ~15 minutes without movement |
| Drift / reset interval | Around an hour when walking and socialising; every ~10 minutes when dancing hard |
| Firmware | SlimeVR nRF tracker firmware (open source) |

## Controls

There is **one button** on the tracker. Different press counts do different things.

| Action | Result |
|---|---|
| 1 press | Power on (when off) / **reset** (when already on) |
| 2 presses | **Side calibration** — IMU calibration on a flat surface, see below |
| 3 presses | Enter **pairing** mode (LED flashes once per second) |
| 4–5 presses | Enter **DFU** (firmware-update) mode — avoid unless intentional |
| Hold | Power off |

:::caution
The button behavior above matches VYRO VR's current shipping firmware and the [vyrovr.com setup guide](https://vyrovr.com/setup). Generic Smol Slime firmware maps the button differently (hold for pairing, 4 presses for DFU), so if you flashed a non-VYRO build the counts may not match. Check the [Discord](https://discord.gg/vyrovr) if in doubt — and let us know so we can update this page.
:::

### Side calibration (2 presses)

Side calibration zeroes the gyroscope bias, which is the main source of slow drift. It is **not** mounting calibration — it doesn't care where the tracker is on your body.

1. Take the tracker off and press the button **twice**.
2. Set it down on a flat, still surface within a couple of seconds.
3. The LED flashes **once**, then goes **solid** while calibrating, then gives **4 rapid flashes** on success.
4. Pick it up and carry on.

Do this if one tracker drifts noticeably faster than the rest. Trackers ship calibrated, so most people never need it.

## LED at a glance

| LED behavior | Meaning |
|---|---|
| Comes on after a single press | Powered on |
| Flashing once per second | Pairing mode (3 presses) |
| One flash → solid → 4 rapid flashes | Side calibration running / succeeded |
| Solid then fades out (or just fades out) when you hold the button | Powering off (which one you see depends on firmware) |
| Slow fade / pulse plus a USB drive appearing on your PC | DFU mode |

Full reference: [LED Codes](/trackers/led-codes/).

## Where to go next

- First-time setup → [Quick Start](/getting-started/quick-start/)
- Pair / re-pair a tracker → [Pairing](/trackers/pairing/)
- Power and sleep behavior → [Powering On & Off](/trackers/powering-on-off/)
- Full LED reference → [LED Codes](/trackers/led-codes/)

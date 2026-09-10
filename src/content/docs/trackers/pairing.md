---
title: Pairing
description: Pair (or re-pair) an IBIS tracker to your USB receiver.
---

IBIS trackers ship **pre-paired to the receiver that came in your kit**. For most users, you don't need to do anything on this page — turn the trackers on, plug in the receiver, they connect.

You only need to pair manually if:

- You bought a single replacement/extra tracker or a no-receiver upgrade kit
- You swapped to a new receiver
- A tracker has dropped off the receiver and isn't reconnecting after a power cycle
- You're recovering from a botched firmware update

## Before you start: match firmware versions

Trackers and the receiver must run the **same firmware version** to pair instantly. Replacement receivers ship with the latest firmware, which may be newer than the trackers you already own. If pairing refuses to complete, update the trackers (or the receiver) so they match — see [Updating Firmware](/firmware/updating/).

## How pairing works

The receiver has its own radio ID. When a tracker is in pairing mode, it looks for a receiver that is also in pairing mode and binds to it. Once paired, the tracker remembers that receiver and ignores all others.

## Step 1: Put the receiver into pairing mode

How you do this depends on which receiver you have — see [Installing the Receiver](/receiver/installing/) to identify it.

### VYRO VR Receiver (USB-C, printed case with a button)

Press the **button on the receiver case**. That's it — the receiver is now listening for trackers. Skip to step 2.

### HolyIOT or Styria receiver (no pairing button)

These receivers are put into pairing mode with the `pair` command over their USB serial port. Two tools work:

- **[SmolSlimeConfigurator](https://github.com/SlimeVR/SmolSlimeConfigurator)** — a small SlimeVR community app with a Pair button. Easiest option.
- **[nRF Connect for Desktop](https://www.nordicsemi.com/Products/Development-tools/nrf-connect-for-desktop)** → **Serial Terminal** app — the general-purpose route, described below.

Using nRF Connect for Desktop:

1. Install nRF Connect for Desktop, open it, and install the **Serial Terminal** app from its app library.
2. Plug the receiver into your PC via its [USB extension cable](/receiver/installing/).
3. Open **Serial Terminal**, select the receiver's serial port from the device dropdown, and connect. You'll see receiver console output.
4. Type `pair` and press Enter. The receiver is now listening for trackers.

This follows the official [SlimeVR Smol Pairing & Calibration guide](https://docs.slimevr.dev/smol-slimes/firmware/smol-pairing-and-calibration.html).

## Step 2: Put the tracker into pairing mode

On the tracker, **press the button 3 times** in quick succession. The LED starts flashing **once per second**, indicating it's broadcasting for pairing.

## Step 3: Wait for the pair to register

Within a few seconds the tracker's LED stops the once-per-second blink and the tracker appears in the SlimeVR Server window. If you're watching the receiver's serial console, you'll see a line like:

```
<inf> esb_event: Added device on id 0 with address 95CB23A0FDF7
```

## Step 4: Exit pairing mode

- **VYRO VR Receiver:** press the case button again, or just unplug and replug it.
- **HolyIOT / Styria:** type `exit` in the Serial Terminal and press Enter (or click Exit pairing in SmolSlimeConfigurator).

Leaving the receiver in pairing mode isn't harmful — it just keeps listening for new trackers.

## Step 5: Assign the tracker to a body part

See [Assigning Trackers](/slimevr-server/assigning-trackers/).

## Pair multiple trackers at once

With the receiver still in pairing mode, repeat step 2 for each tracker in turn. Each one registers separately. Exit pairing mode once at the end.

## Other receiver serial commands

These commands work in the same Serial Terminal session. Source: [SlimeVR Smol Serial & Button Commands](https://docs.slimevr.dev/smol-slimes/firmware/smol-firmware-serial-and-button-commands.html).

| Command | What it does |
|---|---|
| `info` | Show receiver firmware version and details |
| `list` | List paired trackers |
| `pair` | Enter pairing mode |
| `exit` | Exit pairing mode |
| `add <address>` | Manually add a tracker by its radio address |
| `remove` | Remove the last paired tracker |
| `clear` | Clear all stored trackers (you'll need to re-pair everything) |
| `reboot` | Soft-reset the receiver |
| `dfu` | Enter the DFU bootloader for firmware updates — see [Updating Firmware](/firmware/updating/) |

## Confirm a pair

Pick up the tracker and physically rotate it. The matching entry in the SlimeVR Server window should show its orientation changing in real time. If a different tracker animates, you've assigned the wrong physical tracker to that slot — re-assign in the [Assigning Trackers](/slimevr-server/assigning-trackers/) flow.

## When pairing fails

- **Tracker LED keeps blinking once per second:** The receiver isn't in pairing mode. Press the receiver button again, or re-run `pair`.
- **Tracker blinks, receiver is in pairing mode, nothing happens:** Firmware versions probably don't match. Run `info` on the receiver, check the tracker's version, and update whichever is behind — see [Updating Firmware](/firmware/updating/).
- **You put a tracker into pairing mode by accident:** Press the button once (or hold to power off, then single-press) to leave pairing mode.
- **`pair` command does nothing in the terminal:** Confirm you're connected to the receiver's serial port (not another USB serial device) and that you pressed Enter after typing the command.
- **Tracker pairs but doesn't appear in SlimeVR:** Check the [SlimeVR Server window's connection status](/slimevr-server/first-launch/) and the [receiver troubleshooting page](/troubleshooting/receiver-not-detected/).
- **Tracker pairs to the wrong receiver** (e.g., a friend's): Hold the button to power off, then re-pair to your receiver using the steps above.

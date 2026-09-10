---
title: Quick Start
description: From sealed box to full-body tracking in about 30 minutes.
---

This is the fastest path from "I just opened the box" to "I'm walking around in VR with full-body tracking." Each step has a dedicated page for more detail — links are inline.

If you've never used SlimeVR before, it's worth skimming [How the Trackers Work](/getting-started/how-trackers-work/) first. Otherwise, go.

## 1. Charge the trackers

Drop each tracker into the included **charging dock** with the USB-C port facing down, then plug the dock into a **USB port on your PC** (or a powered hub). A wall charger is faster, but cheap ones have damaged trackers, so stick with the PC port — see [Charging](/charging-and-battery/charging/). (Lite Edition kits have no dock — charge each tracker with a USB-C cable instead.)

Trackers usually arrive near fully charged, but a button can get pressed in transit, so let them all reach full once before you start. See [Charging](/charging-and-battery/charging/) for details.

## 2. Install the SlimeVR Server

On your PC (the same one you'll run VR from), download and install the **SlimeVR Server** from [slimevr.dev](https://slimevr.dev). It's a free open-source app. Full install notes: [Install SlimeVR Server](/slimevr-server/install/).

After install, launch it. You'll see the SlimeVR window with a list of trackers (empty for now).

## 3. Plug in the receiver

Take the **USB receiver** and the **USB extension cable** from your kit. Plug the receiver into the extension cable, then the extension into your PC. Receivers vary by batch (some are USB-A, the newer VYRO VR Receiver is USB-C) — see [Installing the Receiver](/receiver/installing/) if yours doesn't look like the pictures.

:::caution[Always use the extension cable]
**Do not plug the receiver directly into your PC.** The receiver is small and its USB connector is fragile — repeatedly plugging it directly into a PC port (especially the back of a tower) puts mechanical stress on the connector and can break it. The included USB extension cable both protects the receiver and dramatically improves wireless range.
:::

Mount or rest the receiver as high as you can in your playspace, ideally above head height with a clear line of sight to where you'll be tracking. More: [Receiver Placement](/receiver/range-and-placement/).

## 4. Power on the trackers

Pick up each tracker and **press the button once**. The LED will come on; the tracker is now broadcasting. Each tracker is **pre-paired to your receiver**, so as soon as the server sees it, it'll appear in the SlimeVR window.

If a tracker doesn't show up after 10 seconds, see [Pairing](/trackers/pairing/) and [Tracker Won't Pair](/troubleshooting/tracker-not-pairing/).

## 5. Strap up

Assemble each strap — see [Basic Straps & Trays](/straps/basic-straps/) (or [Comfort / Premium Straps](/straps/comfort-strap/) for Premium sets) — and slide each tracker into its tray, USB port down. Mount them in roughly the right places — the exact positions are shown in [Wearing Trackers](/straps/wearing-trackers/) — and tighten the straps until they're snug but not painful. The placement stickers in the box help you keep track of which tracker goes where.

Don't worry about precision yet. The server's mounting calibration will figure out orientation in a few seconds.

## 6. Run the first-launch wizard

Back in the SlimeVR Server window, click **Setup**. The wizard will walk you through:

1. Wi-Fi credentials — **skip this** for IBIS trackers (they use the receiver, not Wi-Fi)
2. **Assign each tracker to a body part** (left foot, right ankle, hip, etc.)
3. **Mounting calibration** — strike a T-pose and follow the prompts
4. **Body proportions** — enter your height, then either let AutoBone measure you in VR or fine-tune by hand

Full walkthrough: [First Launch](/slimevr-server/first-launch/).

## 7. Enter VR

With the SlimeVR window still running:

- **PCVR** (Index, Quest Link, Vive, Pimax, etc.) — start SteamVR. SlimeVR's SteamVR driver picks up the trackers automatically.
- **Quest standalone / standalone Pico** — the server can run on a laptop, a phone, or the headset itself; see [SteamVR & OSC](/slimevr-server/steamvr-and-osc/).

Put your headset on, stand straight, and trigger a **full reset** (from the SlimeVR window, or the default `Ctrl+Alt+Shift+Y` hotkey). You're tracked.

## 8. Set up reset bindings

Drift over time is normal. Bind the **full reset** and **yaw reset** to controller buttons so you can re-zero from VR without taking the headset off. See [Resets](/slimevr-server/resets/).

## You're done

If something doesn't work, jump to [Troubleshooting](/troubleshooting/). If it does — welcome to full-body VR.

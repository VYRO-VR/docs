---
title: First Launch
description: Walk through the SlimeVR Server setup wizard with IBIS trackers.
---

Launch **SlimeVR Server** for the first time. The window that opens is the GUI — you'll do all setup here.

## The home screen

You'll see:

- A list of trackers (empty if none are connected yet)
- A **Setup** button — this is the first-launch wizard
- Sidebar with **Trackers**, **Settings**, **Body proportions**, etc.

If you haven't yet, plug in your receiver and power on a tracker (single button press). It should pop into the list within a few seconds.

## Run the Setup wizard

Click **Setup**. The wizard has roughly these steps:

### 1. Wi-Fi credentials — **skip this for IBIS**

IBIS trackers don't use Wi-Fi; they use the receiver dongle. If the wizard insists, enter dummy values or skip — they won't be applied.

### 2. Connect your trackers

The wizard will ask you to "turn on your trackers." Press the button once on each tracker. They light up and appear in the wizard's tracker list. Confirm the count matches your kit (6 for Core and Lite, 8 for Advanced, 10 for Full Body, plus any upgrade kits).

### 3. Assign each tracker to a body part

The wizard prompts you one at a time. For each prompt, **physically tap or shake the tracker** that belongs on that body part. The wizard detects the motion and assigns it. Easy.

If you'd rather assign by hand, see [Assigning Trackers](/slimevr-server/assigning-trackers/).

### 4. Mounting calibration

Stand up straight, follow the on-screen pose prompts (T-pose, etc.). The wizard locks in each tracker's orientation. Detailed flow: [Mounting Calibration](/slimevr-server/mounting-calibration/).

### 5. Body proportions

Set your **height** — click **Calculate my height automatically** while standing straight with the headset on, or type it in — and apply. The server scales all bone lengths from it. That's the method VYRO VR recommends; skip AutoBone unless you have a specific reason to try it.

More: [Body Proportions](/slimevr-server/body-proportions/).

### 6. Reset tutorial

The wizard teaches you the **full reset** and **yaw reset** gestures. Practice them — you'll use them every session.

## You're done with the wizard

From here on, the server remembers everything. On future launches, just turn on the trackers, hit a full reset, and play.

## Things to set up next

- **Reset bindings** ([Resets](/slimevr-server/resets/)) — bind resets to controller buttons or hotkeys so you can re-zero from inside VR
- **VRChat config** ([VRChat](/games/vrchat/)) — IK and FBT options if you're going there
- **Stay Aligned** ([Stay Aligned](/firmware/stay-aligned/)) — auto-correct yaw drift while you play

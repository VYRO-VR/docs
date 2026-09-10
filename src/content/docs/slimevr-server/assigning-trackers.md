---
title: Assigning Trackers
description: Tell the SlimeVR Server which physical tracker is on which body part.
---

The server has to know **which tracker corresponds to which body part**. The setup wizard handles this for you with shake-to-assign, but you can also do it by hand.

## During the wizard

The wizard names a body part (e.g., "Left foot") and asks you to **tap or shake** the tracker on that body part. The server detects the motion spike and assigns it. Repeat for each tracker. Hard to get wrong.

## By hand

In the **Trackers** sidebar, every connected tracker has an entry. Click one to open its detail panel. There's a **Body location** dropdown — pick a body part.

The standard mapping for an IBIS Full Body set:

| Body location | What goes there |
|---|---|
| Left foot / Right foot | Foot trackers (Advanced and Full Body sets, or the foot kit) |
| Left ankle / Right ankle | Lower-leg trackers |
| Left upper leg / Right upper leg | Thigh trackers |
| Hip | Hip strap tracker |
| Chest | Chest tracker (via chest harness) |
| Left upper arm / Right upper arm | Upper-arm trackers (Full Body sets, or the arm kit) |

Core (6) sets skip the foot and upper-arm slots; Advanced (8) sets skip the upper-arm slots. Every set has a chest tracker (except the Lite Edition, unless you added a harness).

## Confirming you got it right

For each tracker, **physically rotate** the body part you've assigned. The tracker's orientation arrow in the SlimeVR window should move with you. If a **different** tracker animates, you swapped two assignments — flip them.

## What if you put a tracker on the wrong leg?

Easy fix: in the Trackers panel, swap the body location dropdown for the two affected trackers. No re-pairing, no calibration.

## "Auto-detect" vs explicit assignment

The wizard's shake-to-assign is fast but assumes you only have one tracker moving when you tap. If you're in a crowded room with someone else's trackers also in range, prefer the explicit dropdown method.

## After assignment

Run [Mounting Calibration](/slimevr-server/mounting-calibration/) so the server knows the orientation of each tracker on each body part. Without that step, your avatar will be rotated wrong.

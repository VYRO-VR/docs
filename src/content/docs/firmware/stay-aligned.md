---
title: Stay Aligned
description: Auto-correct yaw drift while you play.
---

**Stay Aligned** is a SlimeVR Server feature that automatically corrects **yaw drift** while you play. Instead of yaw-resetting every few minutes, the server detects when a tracker's facing direction has drifted and quietly nudges it back. It's entirely server-side — it works with any IBIS firmware.

## What yaw drift is

Yaw drift is the slow rotation of your virtual heading away from your real heading over time. It comes from tiny IMU integration errors that accumulate while you move. Without correction, after 20-30 minutes your avatar might be facing 10° off from where you're actually facing.

Yaw drift is the most annoying form of drift because it makes your virtual feet face the wrong way. Stay Aligned eliminates most of it.

## Enabling it

1. Open the SlimeVR Server.
2. Open **Settings** and find **Stay Aligned**.
3. Run the **Stay Aligned setup** wizard. It asks you to hold a few poses (standing relaxed, sitting, lying down) so the server learns what "aligned" looks like for you, then turns the feature on.

There's no per-tracker config; the server applies it across all trackers.

## What changes

- You'll yaw-reset far less often. Most users go from every 10–60 minutes to once per session or less.
- Trackers feel "stickier" in the right direction.
- No latency cost — the corrections are gradual and happen during normal play.

## What doesn't change

- **Pitch and roll** drift still exist, though they're less severe. Full reset still occasionally needed.
- **Position errors** from wrong body proportions aren't affected — Stay Aligned is purely a rotation feature.
- Mounting and pairing work the same.

## Requirements

- SlimeVR Server **0.16.0 (July 2025) or newer** — every current release qualifies. Update the server if yours predates it.
- No tracker firmware requirement.

## See also

VYRO VR's write-up of the release: [SlimeVR Server Update Introduces "Stay Aligned"](https://vyrovr.com/blogs/news/slimevr-server-update-introduces-stay-aligned).

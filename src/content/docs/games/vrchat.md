---
title: VRChat
description: Configure VRChat for full-body tracking with IBIS trackers.
---

VRChat is the most common game IBIS users play (ChilloutVR, Resonite, Blade & Sorcery, and anything else that accepts Vive-style trackers work too). A few VRChat-specific settings make full-body feel right.

## In-game settings

Open VRChat → **Settings** → **Tracking & IK**:

| Setting | Recommendation |
|---|---|
| Real Height | Your actual standing height (cm or inches). VRChat uses this to scale your avatar correctly. |
| Calibration Range | Wide is fine for most setups |
| IK 2.0 | On — modern IK is significantly better |
| Half body | Off (this is for upper-body only) |
| Avatar measurement | **By eye height** (or **By arm span** if eye height is off on your avatar) |
| FBT Spine | **Hip-locked** for most avatars. Switch to **Head-locked** if your avatar's chest stretches weirdly. |
| Force locomotion animations | Off (lets your tracking drive walking instead) |

## Calibrate in VRChat

Every avatar needs calibration the first time you wear it:

1. Wear the avatar
2. Hold both triggers + grips (the calibration menu pops up)
3. Stand in **T-pose** with your hands aligned to the avatar's wrist gizmos
4. Confirm

You should look like yourself. If a limb is way off:

- Knees bend backward → mounting is wrong on that thigh tracker, re-run [Mounting Calibration](/slimevr-server/mounting-calibration/)
- Avatar is the wrong height → fix your **Real Height** setting in VRChat
- Feet sink into the floor → fix **foot height** in [Body Proportions](/slimevr-server/body-proportions/)

## Reset etiquette in VRChat

Yaw-reset whenever your avatar's facing drifts off real-world. Full reset between worlds or after long sits.

If you're using [Stay Aligned](/firmware/stay-aligned/), yaw drift will be much lower and you can mostly forget about manual yaw resets.

## VRChat on Quest standalone

See [SteamVR & OSC](/slimevr-server/steamvr-and-osc/) for the OSC setup that gets IBIS trackers into Quest-standalone VRChat.

## Common VRChat-specific gotchas

- **"My feet are crossing through each other"** — bone proportions are off. Re-run [AutoBone](/slimevr-server/body-proportions/).
- **"My avatar is leaning forward"** — your hip tracker is too high or rotated wrong. Check [Wearing Trackers](/straps/wearing-trackers/) and re-run mounting calibration.
- **"My head moves but body doesn't follow"** — SteamVR isn't seeing the trackers. See [Trackers Not Showing in SteamVR](/troubleshooting/steamvr-not-showing/).

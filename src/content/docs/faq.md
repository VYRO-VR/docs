---
title: FAQ
description: Common questions about VYRO VR IBIS trackers.
---

## How do IBIS trackers connect to my PC?

Through the **USB receiver** included with your kit. They do not use Wi-Fi. Plug the receiver into your PC (via the extension cable), power on the trackers, and they appear in the SlimeVR Server within seconds. See [How the Trackers Work](/getting-started/how-trackers-work/).

## Can I mix IBIS trackers with other tracking hardware?

Yes. The SlimeVR Server treats all trackers equally, so IBIS trackers can sit alongside official SlimeVR Wi-Fi trackers, other SlimeVR-compatible trackers, or Vive/Tundra trackers in the same session. Each type keeps its own limitations (Wi-Fi trackers have more range but shorter battery life, for example).

VYRO VR's own tracker lines (IBIS and Styria) are all nRF-based, so this site only documents the nRF receiver workflow.

## Will IBIS work with my Quest?

**With a PC:** yes. Quest Link, Air Link, Virtual Desktop, or a cable — your Quest sees SlimeVR through SteamVR like any PCVR headset.

**Standalone Quest** (no PCVR): yes. The SlimeVR Server runs on Windows, macOS, and Android, and it does not need a VR-capable PC — any basic laptop works, or you can run the **SlimeVR Android app** on the headset itself with a USB-A-female-to-USB-C (OTG) adapter for the receiver. The server then sends tracking to VRChat over OSC. See [SteamVR & OSC](/slimevr-server/steamvr-and-osc/).

## How long does the battery last?

Realistically **30–50 hours** per charge with constant movement, and it's possible to get over 70 hours in calmer sessions. The chest tracker drains a little faster because breathing keeps it moving. Trackers auto-sleep after about 15 minutes of inactivity, so a forgotten tracker won't drain overnight as long as nothing bumps it.

## How accurate is the tracking?

For full-body VR purposes — VRChat, dancing, exercise, social — IBIS tracking is excellent. Latency is low, drift is gentle, and Stay Aligned handles yaw drift automatically. Your experience will vary with body shape, mounting calibration, and body-proportion setup.

For sub-millimeter scientific measurement — no, IBIS is not the right tool. Use lighthouse-based systems (Vive trackers, Tundra Trackers) for that.

## How often do I need to calibrate?

- **Mounting calibration:** once per session at most. Often not at all if straps stayed in place from the last session.
- **Body proportions:** once, when you set up. Re-do if you significantly change shoes or weight.
- **Full reset:** every session start, plus occasionally during play.
- **Yaw reset:** depends on how much you move. Dancing hard, expect one every 10 minutes or so; walking and socialising, it can be over an hour. Stay Aligned stretches that further.

## Are IBIS trackers waterproof?

**No.** They are not rated waterproof or even water-resistant. Don't wear them in the shower, swimming, or out in heavy rain. Light sweat is fine — wipe trackers down after intense sessions. The straps themselves are machine-washable on a cold cycle.

## Can I update the firmware?

Yes — see [Updating Firmware](/firmware/updating/). It's optional, and VYRO VR recommends **not** updating "just because": the firmware is under active development and a wrong image can soft-brick a tracker. Update when there's a fix you need, and keep trackers and receiver on the same firmware version.

## Do I need to be on Wi-Fi for the trackers to work?

**No.** The trackers and receiver are entirely self-contained. SlimeVR Server runs locally. The only thing that needs internet is the first download of the SlimeVR Server (and, for standalone headsets, the local network between the server and the headset).

## Are IBIS trackers SlimeVR-compatible?

Yes. IBIS trackers run the SlimeVR nRF ("Smol Slime") firmware and are supported by the official SlimeVR Server software.

## What games work?

Anything that accepts Vive-style trackers through SteamVR — VRChat, ChilloutVR, Resonite, Blade & Sorcery, and so on — plus VRChat on standalone headsets via OSC.

## Where can I get a replacement strap / dock / receiver?

[vyrovr.com](https://vyrovr.com) sells basic strap packs, individual **VYRO VR R2** comfort straps (ankle, arm, thigh, hip harness), the **Chest Harness Lite**, replacement trays and hooks, the charging dock, spare 120 mAh batteries, and receivers. For warranty replacement of a defective part, reach out via [support](/support/).

## Can I buy a single tracker as a spare?

Yes — the **Single SlimeVR Compatible IBIS Tracker** at [vyrovr.com](https://vyrovr.com). It comes with two mounting trays, quick-release hooks, and one strap in the length you pick (foot, ankle/arm, thigh, hip/chest, or chest harness). It needs a receiver, so pair it to yours — see [Pairing](/trackers/pairing/) — and make sure its firmware version matches your receiver.

## Common problems

Quick answers to the questions that come up most in the SlimeVR community, adapted from the [SlimeVR Common Issues](https://docs.slimevr.dev/common-issues.html) page and filtered down to what applies to IBIS. Each links to the page with the full fix.

### Setup and software

**How many trackers do I actually need?** SlimeVR works with 5 (chest, both thighs, both ankles), but 6 (adding the hip) is the recommended minimum and what the Core set gives you. Feet and upper arms are the next most noticeable upgrades. See [What You Got](/getting-started/what-you-got/).

**Trackers show up in SlimeVR but not in SteamVR.** The SlimeVR add-on is disabled or missing. SteamVR → Settings → Startup/Shutdown → Manage Add-ons → **slimevr** On. If it's not listed, close both apps and run the SlimeVR installer with **Repair**. [Trackers Not Showing in SteamVR](/troubleshooting/steamvr-not-showing/).

**The SlimeVR window crashes on launch, or complains about WebView2.** Install Microsoft's WebView2 runtime (run the installer as administrator), then relaunch.

**The SlimeVR window keeps saying "Connection lost to the server, trying to reconnect".** Repair the install from the installer. If it persists on Windows, run this in an administrator console and reboot:

```
netsh int tcp set supplemental internet congestionprovider=default
```

**The SlimeVR window is tiny or won't start at all.** Close any other copy of the server (check the system tray), then update or reinstall from the official installer at slimevr.dev.

**SteamVR shows one tracker for my ankle and foot.** That's intentional. SlimeVR combines the ankle's position with the foot's rotation and reports a single tracker per leg to SteamVR.

**My trackers are assigned to the wrong body parts in SteamVR.** Fix it in the SlimeVR window, not in SteamVR's Manage Trackers panel. SlimeVR overrides SteamVR's assignment on every launch. [Assigning Trackers](/slimevr-server/assigning-trackers/).

### Connection

**A tracker won't turn on.** It's flat. Charge it from a PC USB port for at least 3–4 hours before assuming it's dead. [Charging Issues](/troubleshooting/charging-issues/).

**One tracker is missing; the rest are fine.** Power-cycle it (hold to off, single press to on). If it stays missing, re-pair it and make sure it's on the same firmware version as the receiver. [Tracker Won't Pair](/troubleshooting/tracker-not-pairing/).

**Trackers drop out or freeze mid-session, especially the feet.** That's range. The receiver is behind your PC, on a USB 3 port, or below waist height. Put it on the extension cable, high, with line of sight. [Range & Placement](/receiver/range-and-placement/).

**I bought a replacement receiver and nothing pairs.** New receivers ship on the latest firmware; your trackers must match. Update the trackers, then pair. [Updating Firmware](/firmware/updating/).

**My tracker keeps flashing.** The LED is telling you something: once per second is pairing mode (single press exits it), a fade means it's powering off, and one flash → solid → four flashes is side calibration. [LED Codes](/trackers/led-codes/).

### Tracking quality

**My trackers drift more than they should.** Leave the trackers still for 10–20 seconds after powering on so the gyros settle, turn on [Stay Aligned](/firmware/stay-aligned/), and yaw-reset with feet parallel and 5–10 cm apart. A single fast-drifting tracker wants a [side calibration](/trackers/ibis-overview/#side-calibration-2-presses). [Drift & Resets](/troubleshooting/drift-and-resets/).

**My limbs move the wrong way when I move.** Mounting calibration is stale. Re-run it with the trackers worn the way you'll actually play. [Mounting Calibration](/slimevr-server/mounting-calibration/).

**My legs don't bend.** The thigh trackers are too low or assigned wrong. They go above the knee, assigned as **Upper leg / Thigh**; the lower-leg trackers go above the ankle, assigned as **Ankle**. [Wearing Trackers](/straps/wearing-trackers/).

**My legs cross when I sit down.** Calibrate and reset with your feet at least 10 cm apart, angle the thigh trackers slightly outward, and re-check your height in [Body Proportions](/slimevr-server/body-proportions/).

**One leg sits higher than the other.** One thigh tracker is mounted higher or more rotated than the other. Match their positions, then re-run mounting calibration.

**Moving one tracker moves other parts of my avatar in VRChat.** VRChat's IK is blending. Set **Calibration Range** to 0.2 and turn **Use Legacy IK Solving** off. [VRChat](/games/vrchat/).

**My feet sink into the floor or slide around.** Enable **Skating correction** and **Floor clip** in the SlimeVR settings, check your height matches in SlimeVR and VRChat, and adjust foot height if needed. [Body Proportions](/slimevr-server/body-proportions/).

**My avatar floats above the ground.** Your headset's floor level is wrong. Redraw the boundary or reset the floor level (Quest: Settings → Guardian → Set Floor Level), and make sure your real height is the same in SlimeVR and VRChat. On Quest, turn off "Use in a lying position". [VRChat on Quest](/games/vrchat/#vrchat-on-quest-standalone).

**My feet point the wrong way after a reset.** Do a full reset, then raise your heels and trigger **Reset feet mounting**. [Mounting Calibration](/slimevr-server/mounting-calibration/#foot-trackers).

**My avatar leans forward or hunches.** The hip tracker shifted or your torso proportions are off. Re-seat the hip strap, re-run mounting calibration, then re-apply proportions from your height.

### Standalone Quest

**OSC is on but my trackers don't move in VRChat.** Check, in order: OSC is enabled in VRChat's radial menu (Options → OSC); the headset IP in SlimeVR matches what the headset shows under Wi-Fi settings; the server and headset are on the same Wi-Fi; Windows has the network set to **Private** and SlimeVR allowed through the firewall; and **Allow Sending Head and Wrist VR Tracking OSC Data** is on in VRChat's Tracking & IK settings. [SteamVR & OSC](/slimevr-server/steamvr-and-osc/).

**Can I sit or lie down with IBIS trackers?** Yes. Tracking follows your limbs wherever they go. Keep the straps snug so trackers don't rotate when you sit, do a full reset standing before you sit, and run the Stay Aligned setup so the server knows your sitting and lying poses.

## What if I have a question not covered here?

[Discord](https://discord.gg/vyrovr) is the fastest path. We try to answer every question and feed back common ones to this site.

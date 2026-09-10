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

## What if I have a question not covered here?

[Discord](https://discord.gg/vyrovr) is the fastest path. We try to answer every question and feed back common ones to this site.

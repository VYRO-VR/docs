---
title: SteamVR & OSC
description: Get your trackers into PCVR games (SteamVR) or standalone Quest/Pico (OSC).
---

There are two ways your IBIS trackers reach a game: through **SteamVR** (for PCVR) or **OSC** (for standalone headsets running compatible games like VRChat).

## SteamVR (PCVR)

If you play VR through a PC — Index, Vive, Quest Link / Air Link, Quest cable, Pimax, Bigscreen Beyond, etc. — you're using SteamVR.

### Setup

1. **Install the SlimeVR Server** ([Install](/slimevr-server/install/)). The installer automatically registers the SlimeVR SteamVR driver.
2. **Launch SlimeVR Server** before launching SteamVR (order doesn't strictly matter, but this is the reliable habit).
3. **Launch SteamVR.** Your trackers appear automatically as virtual Vive-style trackers.

### Confirming it worked

In the SteamVR status window, you'll see one entry per SlimeVR tracker (alongside your headset and controllers). They should all be **green / connected**.

In SteamVR's **Manage Trackers** panel, you can name each tracker by body part — but the SlimeVR Server already does this internally, so this step is optional.

### When SteamVR doesn't see them

See [Trackers Not Showing in SteamVR](/troubleshooting/steamvr-not-showing/).

## OSC (Quest standalone, Pico, etc.)

If you play standalone on a Quest or Pico without PCVR, you can still use IBIS trackers via **OSC**, which is what VRChat-on-Quest accepts. You do **not** need a VR-capable PC — the SlimeVR Server is light enough for any basic laptop, and it also runs on Android.

### Where the server runs

Pick one:

- **A laptop or desktop on the same Wi-Fi as the headset.** Receiver plugs into the laptop as usual. This is the most common setup.
- **An Android phone.** Install the SlimeVR Server Android app; plug the receiver into the phone with a **USB-A-female-to-USB-C (OTG) adapter** (not included).
- **The headset itself.** The Android app also runs on Quest. Plug the receiver into the headset's USB-C port via the same OTG adapter, and use `127.0.0.1` as the OSC address.

### Configure

1. In SlimeVR Server, open **Settings → OSC → VRChat OSC Trackers** and enable it. Set the address to your headset's IP (Quest: Quick Settings → Wi-Fi → your network → the arrow icon shows the IP), or `127.0.0.1` if the server is running on the headset. Leave the port at the default (9000).
2. In VRChat on the headset, open the radial menu → **Options → OSC** and enable it.
3. Walk to a mirror, open the quick menu, and press **Calibrate FBT** in a T-pose; then do a full reset on the server.

Upstream reference: [SlimeVR OSC information](https://docs.slimevr.dev/server/osc-information.html).

### Notes

- OSC only works in apps that support it. VRChat is the big one. Many other apps do not.
- Latency on standalone-via-OSC is a little higher than PCVR. Acceptable for VRChat, not great for competitive rhythm games.
- Reset hotkeys still work on the machine running the server — see [Resets](/slimevr-server/resets/). If the server is on the headset, use the tracker button (single press) for resets.

For deeper OSC docs and edge cases, see the upstream [SlimeVR OSC page](https://docs.slimevr.dev/server/osc-information.html).

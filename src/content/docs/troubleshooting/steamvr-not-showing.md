---
title: Trackers Not Showing in SteamVR
description: SlimeVR sees your trackers, but SteamVR doesn't.
---

If trackers show up fine in the SlimeVR Server window but **don't appear in SteamVR**, the issue is the SteamVR driver bridge.

## 1. Is SlimeVR Server running?

SteamVR depends on the SlimeVR Server being alive. If you launched SteamVR first and the server isn't running, restart in this order:

1. Quit SteamVR completely
2. Launch SlimeVR Server (wait until trackers connect)
3. Launch SteamVR

## 2. Is the SteamVR driver actually installed?

In SteamVR:

- **Settings → Startup/Shutdown → Manage Add-ons**
- Look for **slimevr** in the list

If it's missing, the driver didn't register. Reinstall the SlimeVR Server, or run the driver registration step from inside the SlimeVR window (Settings → SteamVR driver → Re-register).

## 3. Is the driver disabled?

Same panel as above — toggle **slimevr** to **On**. Restart SteamVR.

![SteamVR menu → Settings → Advanced Settings Show → Startup/Shutdown → Manage Add-ons → slimevr On. If slimevr is missing, close both apps, run the SlimeVR installer and choose Repair](../../../assets/infographics/steamvr-addons.png)

*Infographic by [Spazzwan](https://imgur.com/a/PCYz9Zw), used with permission.*

## 4. Conflicting drivers

If you've previously had Vive trackers or another full-body solution installed, the SteamVR driver list may have an older driver shadowing SlimeVR. In the same panel, disable other tracking drivers and restart SteamVR.

## 5. Firewall blocking the server

The SlimeVR Server communicates with the SteamVR driver via local ports. If your firewall has blocked it (or you didn't allow it on first launch), trackers can show up in the SlimeVR window but never reach SteamVR.

- Windows Defender Firewall → allow **SlimeVR-Server** (or the Java executable) on Private and Public networks.

## 6. Try a SteamVR restart

Sometimes the driver loads fine but SteamVR's tracker registry is stale. Quit SteamVR, restart it.

## 7. Reinstall the driver

In the SlimeVR Server window: **Settings → SteamVR Driver → Reinstall**. This re-registers the driver from scratch.

## Still nothing

Check the SteamVR logs:

- SteamVR system tray → **Create System Report**
- Search for "slimevr" — if there's an error message there, that's the actual problem

Post the SteamVR-side error in [Discord](https://discord.gg/vyrovr) — much faster diagnosis than guessing.

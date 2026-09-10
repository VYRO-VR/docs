---
title: Resets
description: Full reset, yaw reset, mounting reset — what they do and how to bind them.
---

Trackers drift. Not a lot, but enough that after 20-30 minutes of play, your virtual feet might be facing slightly to the side of your real feet. **Resets** fix that.

## The three resets

### Full reset

Re-zeros **all** tracker rotations to your current pose. Stand straight, face forward, trigger it. Everything snaps back to neutral.

Use when: drift has built up, or after a session pause where you sat down and got back up.

### Yaw reset

Re-zeros only **horizontal rotation** (left/right facing). Faster, less invasive than a full reset — useful as a "just fix my heading" tweak.

Use when: your avatar is facing slightly off but vertical alignment (feet on the floor, etc.) feels fine.

### Mounting reset

Re-runs **mounting calibration** for all trackers. Use if a tracker shifted on your body or you put it on the wrong way around mid-session.

Use when: one specific tracker is acting weird and you don't want to take the headset off.

## Binding resets

By default, you trigger resets from the SlimeVR Server window. That's fine for setup, but in VR you need them bound to **controller buttons** or **keyboard shortcuts**.

### SteamVR bindings (PCVR users)

1. Start SteamVR with the SlimeVR Server running.
2. SteamVR menu → **Settings** → **Controllers** → **Show Binding UI** → **Show More Applications** → **SlimeVR-Bindings-Provider**.
3. Click the **+** next to the button you want, and set one of its inputs (click/touch, or long/held) to **Full reset**.
4. Bind another to **Yaw reset**.
5. Optionally bind **Mounting reset** to a longer chord.

Common bindings: a long-press of a face button, or a double-tap. Upstream reference: [SlimeVR — Setting up reset bindings](https://docs.slimevr.dev/server/setting-reset-bindings.html).

### Keyboard shortcuts

The server has built-in global hotkeys, which work on any platform and are the usual route on standalone headsets when the server runs on a nearby laptop:

| Default hotkey | Action |
|---|---|
| `Ctrl+Alt+Shift+Y` | Full reset |
| `Ctrl+Alt+Shift+U` | Yaw (quick) reset |
| `Ctrl+Alt+Shift+I` | Mounting reset |
| `Ctrl+Alt+Shift+O` | Pause tracking |

Change them under **Settings → Keybindings** in the SlimeVR window (or in `vrconfig.yml`). Tools like OVR Advanced Settings or OVR Toolkit can fire these hotkeys from a controller if you'd rather not use the SteamVR binding UI.

### Tracker button

A single press of any powered-on tracker's button also triggers a **reset**, which is handy when you don't have a controller in hand.

## Reset etiquette

- Stand straight when you trigger a full reset
- Face the direction you want to be "forward"
- Don't trigger a reset mid-motion — you'll zero against a weird pose

## How often should I reset?

- **Yaw reset:** depends on how much you move — every ~10 minutes if you're dancing hard, around an hour or more if you're walking and socialising; bind it to an easy button either way
- **Full reset:** once per session start, then as needed
- **Mounting reset:** rarely — only if something feels actively wrong

If you find yourself yaw-resetting constantly, turn on **Stay Aligned** — it auto-corrects yaw drift while you play. See [Stay Aligned](/firmware/stay-aligned/).

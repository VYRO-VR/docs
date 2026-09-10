---
title: Tracker Won't Pair
description: A tracker isn't showing up in the SlimeVR window — work through this.
---

Work through these in order. Most "won't pair" reports turn out to be one of the first three.

## 1. Is the tracker actually on?

Press the button **once**. The LED should light. If it doesn't, the tracker is dead or empty — drop it on the charging dock for 10 minutes and try again.

If it still doesn't light after charging, see [Charging Issues](/troubleshooting/charging-issues/).

## 2. Is the receiver plugged in and recognized?

- Receiver in extension cable, extension in PC USB port?
- Other trackers in the same kit working?

If no trackers are visible (not just this one), the receiver is the issue. Jump to [Receiver Not Detected](/troubleshooting/receiver-not-detected/).

If other trackers are connected fine and only this one isn't, continue.

## 3. Is the SlimeVR Server actually running?

Open the SlimeVR window. It should list connected trackers in real time. If the window isn't open, nothing will appear there.

## 4. Power-cycle the tracker

Hold the button to power off. Single-press to power back on. Wait ten seconds.

This fixes most "stuck in a weird state" issues, including trackers that have entered pairing mode by accident (LED flashing once per second — a single press also exits it).

## 5. Re-pair it

If the tracker has somehow forgotten its pairing (or you're using a new receiver), follow the [Pairing](/trackers/pairing/) procedure end-to-end. Brief version:

1. Put the receiver into pairing mode — press the button on a VYRO VR Receiver, or send `pair` from **nRF Connect for Desktop → Serial Terminal** / SmolSlimeConfigurator on a HolyIOT or Styria receiver.
2. On the tracker, press the button **3 times** quickly — LED starts blinking once per second.
3. Wait for the LED to stop blinking. The tracker should appear in the SlimeVR list.
4. Exit pairing mode (button again, or `exit`).

**If it refuses to pair**, the tracker and receiver are almost certainly on **different firmware versions**. This is common after buying a replacement receiver or a no-receiver upgrade kit. Update them to the same version — see [Updating Firmware](/firmware/updating/).

## 6. Range check

Stand near the receiver (within 1-2 meters) and retry. If it pairs up close but not from your playspace, the receiver placement is killing your signal — see [Range & Placement](/receiver/range-and-placement/).

## 7. Try a different USB port

Some USB ports (especially front-panel ports on older PCs) are unreliable. Move the receiver's extension cable to a different port.

## 8. Conflict with another receiver

Are there other SlimeVR-compatible trackers or a second receiver in the room (yours, a roommate's, a borrowed setup)? In rare cases trackers can latch onto a different receiver. Power off other receivers and re-pair.

## Still stuck

Post in [Discord](https://discord.gg/vyrovr) with:

- Which kit you have
- LED behavior on the affected tracker
- What you've tried from this list
- Whether other trackers in the kit are working

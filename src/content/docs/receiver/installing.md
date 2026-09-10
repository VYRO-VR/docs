---
title: Installing the Receiver
description: Identify your USB receiver, plug it in, and confirm it's recognized.
---

The receiver is the small USB device that talks to your trackers. It's the only piece of hardware besides the trackers that has to be connected to your PC.

:::caution[Always use the extension cable]
**Do not plug the receiver directly into your PC.** The receiver is small and its USB connector is fragile — repeatedly plugging it straight into a PC port (especially the back of a tower) can damage the connector. The included USB extension cable protects the receiver **and** dramatically improves wireless range. Use it every time.
:::

## Which receiver do you have?

VYRO VR has shipped three receiver designs. They all run the same SlimeVR nRF receiver firmware and behave the same in the SlimeVR Server; the differences are physical.

| Receiver | How to spot it | Connector | Pairing |
|---|---|---|---|
| **HolyIOT** | Bare-board dongle with an external screw-on (SMA) antenna | USB-A male | Serial command (`pair`) |
| **Styria** | Sturdier cased dongle; standard in current standard sets and upgrade kits | USB-A male | Serial command (`pair`) |
| **VYRO VR Receiver** | Printed case, no external antenna, a small button on the case. Amplified (RFX2401C front-end) with a PCB trace antenna | USB-C female (ships with a USB-A to USB-C cable) | Press the case button |

All three plug into a USB-A port on your PC: the HolyIOT and Styria receivers via the USB-A extension cable, the VYRO VR Receiver via its USB-A to USB-C cable (extend that with the USB-A extension if you need reach). If you have an external antenna, keep it upright and don't force it — snapped SMA connectors are the most common receiver failure.

## Step by step

1. **Plug the receiver into its cable**, not directly into your PC.
2. **Plug the other end** into a free USB port on your PC. Any USB-A port works; USB 2.0 is fine.
3. **Place the receiver up and away** from your computer — clipped to a shelf, taped to the back of a monitor, hanging from a desk lamp, whatever works. Higher = better. See [Range & Placement](/receiver/range-and-placement/) for why this matters.
4. **Power on a tracker** (single button press). It should appear in the SlimeVR Server window within a few seconds.

That's it. No drivers, no pairing app, no Wi-Fi credentials. Windows, macOS, and Linux all recognize the receiver without setup.

## How do I know it's recognized?

- On Windows, Device Manager will show a new HID device (and a serial/COM port) appear when you plug the receiver in.
- In the SlimeVR Server window, any powered-on paired tracker will show up. If the SlimeVR Server window shows zero trackers and you know your trackers are charged, the receiver is the likely suspect — see [Receiver Not Detected](/troubleshooting/receiver-not-detected/).

## Do not

- Plug the receiver directly into the back of a tower PC. The metal chassis kills 2.4 GHz range — that's literally what the extension is for.
- Plug it into a USB 3.0 hub near your headset cable. USB 3 emits 2.4 GHz noise; co-locating the receiver with USB-3 traffic causes dropouts.
- Lever or bend an external antenna. Rotate it upright gently and leave it.

## Replacement receivers and firmware versions

Replacement receivers ship pre-flashed with the **latest** receiver firmware, which may be newer than the trackers you already own. Trackers and receiver must be on matching versions to pair, so plan on updating your trackers when you swap receivers — see [Updating Firmware](/firmware/updating/) and [Pairing](/trackers/pairing/).

## Multiple receivers

Each receiver works as a single, self-contained pairing group. You can run two receivers (e.g., one VYRO VR kit + one borrowed setup) on the same PC if you really want to, but trackers paired to receiver A will not appear via receiver B. For everyday use, one receiver per playspace is the answer.

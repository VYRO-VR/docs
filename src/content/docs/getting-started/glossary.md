---
title: Glossary
description: VR and SlimeVR terms you'll run into while setting up IBIS trackers.
---

## SlimeVR

The open-source project whose software (the SlimeVR Server) drives all SlimeVR-compatible trackers, IBIS included. Maintained at [slimevr.dev](https://slimevr.dev).

## SlimeVR Server

The desktop app on your PC that talks to your trackers via the USB receiver, manages body configuration, and feeds data into SteamVR or VRChat OSC.

## SlimeVR GUI

The web-style interface that opens when you launch the SlimeVR Server. Where you do all setup and configuration.

## IBIS tracker

A VYRO VR-made, SlimeVR-compatible tracker using the nRF 2.4 GHz wireless protocol.

## nRF

Nordic Semiconductor's family of wireless microcontrollers. IBIS trackers are built around the nRF52833; the VYRO VR Receiver uses the nRF52840.

## Receiver / dongle

The small USB device that listens for tracker radio traffic and relays it to the SlimeVR Server. Required for IBIS trackers. VYRO VR has shipped HolyIOT, Styria, and VYRO VR Receiver designs; all behave the same.

## IMU

Inertial Measurement Unit — the motion sensor inside each tracker (IBIS uses the LSM6DSV). Measures rotation rate and acceleration.

## Mounting

Which physical orientation the tracker is in when worn (face up, face down, USB-port toward foot, etc.). Mounting calibration figures this out automatically so you don't have to.

## Mounting calibration

A short routine in the SlimeVR setup wizard where you stand and pose in specific ways so the server can figure out each tracker's mounting.

## Body proportions

The lengths of your bones (femur, tibia, torso, etc.). SlimeVR needs these to translate tracker rotations into limb positions.

## AutoBone

The SlimeVR feature that measures your body proportions automatically by watching you walk and squat in VR. Usually beats manual entry.

## Full reset

Re-zeros all tracker rotations to your current pose. Use when drift has built up. Stand straight, face forward, trigger.

## Yaw reset

Re-zeros only horizontal (left/right facing) drift. Faster and less invasive than a full reset; safe to trigger often.

## Mounting reset

Re-runs mounting calibration on the fly. Use if a tracker shifted on your body or you put it on the wrong way around.

## Stay Aligned

A SlimeVR Server feature (since 0.16.0, July 2025) that automatically corrects yaw drift while you play, reducing how often you need yaw resets.

## DFU mode

"Device Firmware Update" mode. A special boot state where the tracker shows up as a small USB drive so you can copy new firmware onto it. Triggered by 4-5 button presses — don't do this unless you're updating firmware.

## OSC

Open Sound Control — the message protocol VRChat (and some other apps) use to receive tracker data on standalone headsets like Quest.

## SteamVR driver

The piece of software that exposes SlimeVR trackers to SteamVR as virtual Vive-style trackers. Installed automatically by the SlimeVR Server.

## Side calibration

A short IMU calibration you trigger from the tracker itself (two button presses) with the tracker resting on a flat surface. Removes gyro bias so the tracker drifts less. Not the same thing as mounting calibration.

## Smol Slime

The SlimeVR community's name for small nRF-based trackers and the firmware they run. IBIS trackers are Smol Slimes, so the [Smol Slimes docs](https://docs.slimevr.dev/smol-slimes/) apply to them.

## Feeder app

A separate utility that forwards SteamVR controller and headset positions into SlimeVR for hybrid use. Not needed for IBIS-only setups, and not where reset hotkeys live (those are in the server itself).

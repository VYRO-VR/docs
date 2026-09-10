// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.vyrovr.com',
  redirects: {
    '/straps/premium-strap/': '/straps/comfort-strap/',
    // Short URLs used by VYRO VR Preflight's built-in doc viewer.
    '/quick-start/': '/getting-started/quick-start/',
    '/pairing/': '/trackers/pairing/',
    '/wearing/': '/straps/wearing-trackers/',
  },
  integrations: [
    starlight({
      title: 'VYRO VR Docs',
      description:
        'Setup, pairing, mounting, and troubleshooting for IBIS trackers and VYRO VR accessories.',
      logo: {
        src: './src/assets/logo.jpg',
        replacesTitle: true,
      },
      favicon: '/favicon.png',
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon.png',
          },
        },
      ],
      customCss: ['./src/styles/custom.css'],
      social: {
        discord: 'https://discord.gg/vyrovr',
        youtube: 'https://www.youtube.com/channel/UCMEc2Ae1-VYC0SYsQ9qyevg',
        tiktok: 'https://www.tiktok.com/@vyrovr',
        github: 'https://github.com/VYRO-VR/docs',
      },
      editLink: {
        baseUrl: 'https://github.com/VYRO-VR/docs/edit/main/',
      },
      lastUpdated: true,
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'What You Got', slug: 'getting-started/what-you-got' },
            { label: 'Quick Start', slug: 'getting-started/quick-start' },
            { label: 'How the Trackers Work', slug: 'getting-started/how-trackers-work' },
            { label: 'Glossary', slug: 'getting-started/glossary' },
          ],
        },
        {
          label: 'Trackers',
          items: [
            { label: 'IBIS Overview', slug: 'trackers/ibis-overview' },
            { label: 'Powering On & Off', slug: 'trackers/powering-on-off' },
            { label: 'LED Codes', slug: 'trackers/led-codes' },
            { label: 'Pairing', slug: 'trackers/pairing' },
          ],
        },
        {
          label: 'Receiver',
          items: [
            { label: 'Installing the Receiver', slug: 'receiver/installing' },
            { label: 'Range & Placement', slug: 'receiver/range-and-placement' },
          ],
        },
        {
          label: 'Straps & Mounting',
          items: [
            { label: 'Basic Straps & Trays', slug: 'straps/basic-straps' },
            { label: 'Comfort / Premium Straps', slug: 'straps/comfort-strap' },
            { label: 'Arm Tracker Upgrade Kit', slug: 'straps/arm-kit' },
            { label: 'Foot Tracker Upgrade Kit', slug: 'straps/foot-kit' },
            { label: 'Chest Harness', slug: 'straps/chest-harness' },
            { label: 'Wearing Trackers', slug: 'straps/wearing-trackers' },
          ],
        },
        {
          label: 'SlimeVR Server',
          items: [
            { label: 'Install', slug: 'slimevr-server/install' },
            { label: 'First Launch', slug: 'slimevr-server/first-launch' },
            { label: 'Assigning Trackers', slug: 'slimevr-server/assigning-trackers' },
            { label: 'Mounting Calibration', slug: 'slimevr-server/mounting-calibration' },
            { label: 'Body Proportions', slug: 'slimevr-server/body-proportions' },
            { label: 'Resets', slug: 'slimevr-server/resets' },
            { label: 'SteamVR & OSC', slug: 'slimevr-server/steamvr-and-osc' },
          ],
        },
        {
          label: 'Firmware',
          items: [
            { label: 'Updating Firmware', slug: 'firmware/updating' },
            { label: 'DFU Mode', slug: 'firmware/dfu-mode' },
            { label: 'Stay Aligned', slug: 'firmware/stay-aligned' },
          ],
        },
        {
          label: 'Charging & Battery',
          items: [
            { label: 'Charging', slug: 'charging-and-battery/charging' },
            { label: 'Battery Care', slug: 'charging-and-battery/battery-care' },
          ],
        },
        {
          label: 'Games',
          items: [{ label: 'VRChat', slug: 'games/vrchat' }],
        },
        {
          label: 'Troubleshooting',
          items: [
            { label: 'Overview', slug: 'troubleshooting' },
            { label: 'Tracker Won’t Pair', slug: 'troubleshooting/tracker-not-pairing' },
            { label: 'Drift & Resets', slug: 'troubleshooting/drift-and-resets' },
            { label: 'Receiver Not Detected', slug: 'troubleshooting/receiver-not-detected' },
            { label: 'Short Battery Life', slug: 'troubleshooting/short-battery-life' },
            { label: 'Charging Issues', slug: 'troubleshooting/charging-issues' },
            { label: 'Trackers Not Showing in SteamVR', slug: 'troubleshooting/steamvr-not-showing' },
          ],
        },
        {
          label: 'Safety',
          items: [
            { label: 'Battery Safety', slug: 'safety/battery-safety' },
            { label: 'Wearing Safely', slug: 'safety/wearing-safely' },
            { label: 'RF & Implants', slug: 'safety/rf-and-implants' },
          ],
        },
        {
          label: 'Help',
          items: [
            { label: 'FAQ', slug: 'faq' },
            { label: 'Support', slug: 'support' },
          ],
        },
      ],
    }),
  ],
});

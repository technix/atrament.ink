// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Atrament',
  tagline: 'A game engine for interactive fiction, powered by Ink',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://atrament.ink',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'technix', // Usually your GitHub org/user name.
  projectName: 'atrament.ink', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    }
  },

  trailingSlash: true,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'uk'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-5MMQZP6F5D',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/atrament-social-card.png',
      navbar: {
        title: 'Atrament',
        logo: {
          alt: 'Atrament',
          src: 'img/atrament-logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'quickstart',
            position: 'left',
            label: 'Quick Start',
          },
          {
            type: 'doc',
            docId: 'atrament',
            position: 'left',
            label: 'About',
          },
          {
            type: 'doc',
            docId: 'made-with-atrament',
            position: 'left',
            label: 'Games',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Serhii "techniX" Mozhaiskyi. Built with Docusaurus.`,
        links: [
          {
            label: "This is overridden in src/theme/Footer/Links",
            href: 'https://atrament.ink/'
          }
        ]
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

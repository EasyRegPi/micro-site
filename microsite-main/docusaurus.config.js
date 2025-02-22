// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EasyReg',
  tagline: "Security Compliance Platform",
  favicon: "img/logo.png",

  // Set the production url of your site here
  url: "https://pi-easyreg.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/microsite/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "EasyRegPi", // Usually your GitHub org/user name.
  projectName: "micro-site", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: "ALL",
          blogSidebarTitle: "Sprints",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/card.jpg",
      navbar: {
        title: "EasyRegPi",
        logo: {
          alt: "EasyReg Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "documentationSidebar",
            position: "left",
            label: "Documentation",
          },
          { to: "/blog", label: "Sprints", position: "left" },
          {
            to: "https://github.com/EasyRegPi",
            label: "GitHub",
            position: "right",
            className: "github-link",
          },
          {
            to: "https://github.com/orgs/EasyRegPi/projects/1",
            label: "GitHub Projects",
            position: "right",
            className: "githubprojects-link",
          },
          {
            to: "https://uapt33090-my.sharepoint.com/:f:/g/personal/miguel_soares_francisco_ua_pt/EiXNI0kR7lRBuCfB-Csr9C8B4-pq52bNYP_8hqWFulUNPw?e=zbmgQd",
            label: "Drive",
            position: "right",
            className: "drive-link",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} EasyReg, Projeto informática`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

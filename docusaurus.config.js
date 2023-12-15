import { themes } from 'prism-react-renderer';
import paraAnchor from './src/plugins/para-anchor.js';

const config = {
  title: '禅修笔记',
  tagline: '个人闻思修记录',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blog-nan.hdcxb.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'https://github.com/nanqic/', // Usually your GitHub org/user name.
  projectName: 'zennote', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          rehypePlugins: [paraAnchor],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/nanqic/zennote/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'books',
        path: 'books',
        routeBasePath: 'books',
        sidebarPath: require.resolve('./sidebars.js'),
        rehypePlugins: [paraAnchor],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'notes',
        path: 'notes',
        routeBasePath: 'notes',
        sidebarPath: require.resolve('./sidebars.js'),
        rehypePlugins: [paraAnchor],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '禅修笔记',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            to: '/books/喇荣课诵讲解',
            label: '参考法本',
            position: 'left'
          },
          {
            to: '/notes/xm',
            label: '笔记',
            position: 'left'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: '佛慧法语',
                to: 'https://www.fohuifayu.com',
              },
              {
                label: '慧灯禅修',
                to: 'https://www.huidengchanxiu.net',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} zennote, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 6,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      typesense: {
        // Replace this with the name of your index/collection.
        // It should match the "index_name" entry in the scraper's "config.json" file.
        typesenseCollectionName: 'zennote',

        typesenseServerConfig: {
          nodes: [
            {
              host: 'less.ningway.com',
              port: 443,
              protocol: 'https',
            },
          ],
          apiKey: 'FnBBEeF2xFuSPtVhHc5U8GR6uOl7Q9W9FXdpm1qANCUhedzY',
        },

        // Optional: Typesense search parameters: https://typesense.org/docs/0.24.0/api/search.html#search-parameters
        typesenseSearchParameters: {},

        // Optional
        contextualSearch: true,
      },
    }),

  scripts: [{ src: '/js/global.js', async: false }],

  themes:
    ['docusaurus-theme-search-typesense'],
};


export default config;


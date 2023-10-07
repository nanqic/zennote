const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');


const config = {
  title: '禅修笔记',
  tagline: '个人闻思修记录',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://zennote.pages.dev',
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
          // custom plugin
          rehypePlugins: [require('./src/plugins/para-anchor')],
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
        rehypePlugins: [require('./src/plugins/para-anchor')],
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
            label: 'docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            to: '/books/ksjj',
            label: '参考法本',
            position: 'left'
          },
          {
            href: 'https://github.com/nanqic/zennote',
            label: 'GitHub',
            position: 'right',
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  scripts: [
    { src: '/js/global.js', async: false, },
  ],
};

module.exports = config;

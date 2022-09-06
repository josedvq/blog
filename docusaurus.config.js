/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Jose Vargas-Quiros',
  tagline: 'Glad you are here! Hope you\'ll enjoy reading about my interests.',
  url: 'https://josedvq.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'josedvq', // Usually your GitHub org/user name.
  projectName: 'josedvq.github.io', // Usually your repo name.
  stylesheets: [
    {
      href: 'https://use.fontawesome.com/releases/v6.2.0/css/fontawesome.css',
      media: 'print',
      onload: 'this.media="all"'
    },
    {
      href: 'https://use.fontawesome.com/releases/v6.2.0/css/all.css',
      media: 'print',
      onload: 'this.media="all"'
    }
  ],
  themeConfig: {
    navbar: {
      title: 'Jose Vargas',
      logo: {
        alt: 'Jose David Vargas',
        src: 'img/me.jpg',
      },
      items: [
        {
          to: 'projects',
          docId: 'projects',
          position: 'left',
          label: 'Projects',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          to: 'cv', 
          docId: 'cv',
          label: 'CV', 
          position: 'left'
        },
        {
          href: 'https://github.com/josedvq',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Social Media',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/josedvq',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/josedvq',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'My recipes blog',
              href: 'https://tungsten-hedge-174.notion.site/Recipes-32ae4a9baac6463992487190d5baa0ff',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jose Vargas. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

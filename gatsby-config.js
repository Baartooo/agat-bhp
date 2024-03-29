const path = require('path');

module.exports = {
  siteMetadata: {
    header: 'Agat BHP',
    siteUrl: 'https://agat-bhp.pl',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sitemap',
      exclude: [`/404`],
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Agat BHP',
        short_name: 'AgatBHP',
        start_url: '/',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: path.resolve(__dirname, 'src/assets/svg'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/shared/components/app-layout/AppLayout.tsx'),
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-WB8LWJ9',
        includeInDevelopment: false,
      },
    },
  ],
};

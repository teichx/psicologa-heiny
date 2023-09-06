import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'psicologa-heiny',
    siteUrl: 'https://www.yourdomain.tld',
  },
  graphqlTypegen: false,
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-omni-font-loader',
      options: {
        enableListener: true,
        preconnect: [
          'https://fonts.googleapis.com',
          'https://fonts.gstatic.com',
        ],
        web: [
          {
            name: 'Open Sans',
            file: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap',
          },
        ],
      },
    },
  ],
};

export default config;

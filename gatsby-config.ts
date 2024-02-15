import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "psicologa-heiny",
    siteUrl: "http://psicologa-heiny.s3-website-sa-east-1.amazonaws.com",
  },
  graphqlTypegen: false,
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Heiny Domingos - Psicóloga clinica",
        short_name: "Heiny Domingos - Psicóloga clinica",
        icon: "src/images/logo-square-with-background.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src\/images\/.*\.svg/, // See below to configure properly
        },
      },
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        preconnect: [
          "https://fonts.googleapis.com",
          "https://fonts.gstatic.com",
        ],
        custom: [
          {
            name: "Amsterdam Four",
            file: "/fonts/amsterdam-four.woff2",
          },
        ],
        web: [
          {
            name: "Questrial",
            file: "https://fonts.googleapis.com/css2?family=Questrial&display=swap",
          },
        ],
      },
    },
  ],
};

export default config;

import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "psicologa-heiny",
    siteUrl: "http://psicologa-heiny.s3-website-sa-east-1.amazonaws.com",
  },
  graphqlTypegen: false,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
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
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        preconnect: [
          "https://fonts.googleapis.com",
          "https://fonts.gstatic.com",
        ],
        web: [
          {
            name: "Allura",
            file: "https://fonts.googleapis.com/css2?family=Allura&display=swap",
          },
          {
            name: "Cormorant Garamond",
            file: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&display=swap",
          },
          {
            name: "Sacramento",
            file: "https://fonts.googleapis.com/css2?family=Sacramento&display=swap",
          },
          {
            name: "Crimson Text",
            file: "https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap",
          },
        ],
      },
    },
  ],
};

export default config;

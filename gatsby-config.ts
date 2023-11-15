import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `psicologa-heiny`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: false,
  plugins: ["gatsby-plugin-postcss"],
};

export default config;

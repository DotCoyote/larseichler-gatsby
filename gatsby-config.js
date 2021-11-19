module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "larseichler.de Portfolio Site",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "EhYDNfmILCm6BUI4A3Ksioy7yecNCq8TtC1_LBQcd5Q",
        spaceId: "nnqygdlnd106",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
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
  ],
};

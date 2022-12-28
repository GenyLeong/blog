module.exports = {
  pathPrefix: `/blog`,
  siteMetadata: {
    title: `Geny León | Blog`,
    description: `Ni por la razón, ni por la fuerza.`,
    author: `@geny_leong`,
    siteUrl: `https://genyleong.github.io/`,
    DefaultImage: "https://cdn.glitch.com/496050ba-32d7-4365-a29f-6df52c896215%2Fperfil.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@geny_leong",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blogs',
        path: `${__dirname}/src/blogs`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md']
      }
    },
    // `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/girl.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        isUsingColorMode: false
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
          shortname: `genyleong`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
          // You can add multiple tracking ids and a pageview event will be fired for all of them.
          trackingIds: ["G-397NF0CP5F"],
          pluginConfig: {
            head: true        
          }
      },
    }
  ],
};

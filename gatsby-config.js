module.exports = {
    pathPrefix: "/blog",
    siteMetadata: {
        title: "Geny León",
        titleTemplate: "%s · Geny León",
        description: "Este es mi blog",
        siteUrl: "https://genyleong.github.io/", // No trailing slash allowed!
        DefaultImage: "https://cdn.glitch.com/496050ba-32d7-4365-a29f-6df52c896215%2Fperfil.jpg", // Path to your image you placed in the 'static' folder
        twitterUsername: "@geny_leong",
    },
    plugins: [{
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: ["G-397NF0CP5F"],
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        `gatsby-plugin-catch-links`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                useMozJpeg: true,
                stripMetadata: true,
                defaultQuality: 50,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [{
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 900,
                        quality: 75,
                        withWebp: true,
                        linkImagesToOriginal: true,
                    },
                }, {
                    resolve: `gatsby-remark-embedder`,
                    options: {
                        customTransformers: [
                            // Your custom transformers
                        ],
                        services: {
                            // The service-specific options by the name of the service
                        },
                    },
                }, ],
            },
        },
        {
            resolve: `gatsby-plugin-disqus`,
            options: {
                shortname: `genyleong`,
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-robots-txt`,
    ],
}
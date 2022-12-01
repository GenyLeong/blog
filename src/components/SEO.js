import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyIcon } from "../assets/icons"
import defaultOpenGraphImage from "../assets/images/perfil.jpg"

export function SEO({ title, image, description }) {
    const data = useStaticQuery(
        graphql `
      query {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            description
            siteUrl
            DefaultImage
            twitterUsername
          }
        }
      }
    `,
    )

    // Step 3: Add this
    const ogImageUrl =
        data.site.siteMetadata.siteUrl + (image || defaultOpenGraphImage)

    const ogDescription = data.site.siteMetadata.description + " - " + description

    return ( <
        
        Helmet htmlAttributes = {
            { lang: `en` } }
        title = { title }
        titleTemplate = { `%s ― ${data.site.siteMetadata.title}` }
        meta = {
            [{
                    name: `description`,
                    content: data.site.siteMetadata.description,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: ogDescription,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: ogDescription,
                },
                {
                    name: `twitter:card`,
                    content: `summary_large_image`,
                },
                {
                    property: `og:image`,
                    content: ogImageUrl,
                },
                {
                    name: `twitter:image`,
                    content: ogImageUrl,
                },
                {
                    property: `image`,
                    content: ogImageUrl,
                },
            ]
        }
        link = {
            [{ rel: "icon", type: "image/png", href: `${GatsbyIcon}` }] }
        />
    )
}
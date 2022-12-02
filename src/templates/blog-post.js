import React from "react"
import { graphql } from "gatsby"
import { Disqus } from "gatsby-plugin-disqus"
import { Helmet } from "react-helmet"

import {
    HeaderBack,
    HeadingXL,
    Layout,
    SEO,
    TextBody,
    TextDate,
} from "../components"
import "../styles/extra.css"



export default function BlogPost({ data, location }) {
    const post = data.markdownRemark
    let disqusConfig = {
        url: `${data.site.siteMetadata.siteUrl + location.pathname}`,
        identifier: post.frontmatter.date,
        title: post.frontmatter.title,
    }
    const { ogimage } = post.frontmatter
    const ogImagePath = ogimage && ogimage.childImageSharp.fixed.src
    return ( <>
        <Helmet >
        <script src = "https://d3js.org/d3.v6.min.js" > </script>  
        <script src = "https://cdn.jsdelivr.net/npm/billboard.js/dist/billboard.min.js" > </script>  
        <link rel = "stylesheet"
        href = "https://cdn.jsdelivr.net/npm/billboard.js/dist/billboard.min.css" />
        <script src = "https://public.flourish.studio/resources/embed.js" > </script>  
        <script type = "module"
        src = "/graphs.js" > </script>  
        </Helmet>  <
        SEO title = { data.markdownRemark.frontmatter.title }
        description = { data.markdownRemark.frontmatter.description }
        image = { ogImagePath }
        /> <HeaderBack />
        <Layout >
        <HeadingXL > { data.markdownRemark.frontmatter.title } </HeadingXL>   
        <TextDate > { data.markdownRemark.frontmatter.date } </TextDate>   <
        TextBody dangerouslySetInnerHTML = {
            { __html: data.markdownRemark.html }
        }
        /> <
        Disqus config = { disqusConfig }
        />   </Layout >  
        </>
    )
}

export const data = graphql `
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        ogimage {
          childImageSharp {
            fixed {
              src
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        siteUrl
        description
      }
    }
  }
`
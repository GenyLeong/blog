import React from "react"
import {Link, graphql} from "gatsby"
import styled from "styled-components"
import {
  HeaderLogo,
  HeadingXL,
  HeadingL,
  Layout,
  Image,
  SEO,
  TextBody,
  TextDate,
} from "../components"
import {BREAKPOINT} from "../utils/constants"
import "../styles/extra.css"

const Hero = styled.div`
  margin-bottom: 12vh;

  @media (max-width: ${BREAKPOINT}px) {
    margin-bottom: 15vh;
  }
`
const TextHome = styled.p`
  color: var(--dark-color-light);
  display: block;
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 10vh;
  text-align: center;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 18px;
    margin-bottom: 7vh;
  }
`
const Post = styled.div`
  border-bottom: 1px solid #645252;
  margin-bottom: 50px;

  @media (max-width: ${BREAKPOINT}px) {
    padding-left: 0;
  }
`

export default function Home({data}) {
  console.log(data)
  return (
    <>
      <SEO title="Blog" />
      <HeaderLogo />
      <Layout>
        <Hero>
          <Image
            fixed={data.file.childImageSharp.fixed}
            className="perfil-photo"
          />
          <HeadingXL>Génesis León</HeadingXL>
          <TextHome>
            Este lugar parte de la necesidad de documentar y compartir algunos
            conocimientos y reflexiones sobre periodismo, política y música.
          </TextHome>
        </Hero>
        {data.allMarkdownRemark.edges.map(({node}) => (
          <Link to={node.fields.slug} key={node.id}>
            <Post>
              <HeadingL>{node.frontmatter.title}</HeadingL>
              <TextBody>{node.excerpt}</TextBody>
              <TextDate>{node.frontmatter.date}</TextDate>
            </Post>
          </Link>
        ))}
      </Layout>
    </>
  )
}

export const data = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    file(relativePath: {eq: "assets/images/perfil.jpg"}) {
      childImageSharp {
        fixed(width: 140, height: 140) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

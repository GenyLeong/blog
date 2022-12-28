import React from 'react';
import Blog from '../components/Blog';
import Layout from '../components/Layout';
import { Text } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import Header from '../components/Header';
import Seo from '../components/Seo';

import '../theme/styles.css'

export default function index({ data }) {
  const { blogs } = data.allMdx;

  return (
    <>
    <Header />
    <Layout >
      <Seo />      
      <Text fontWeight={'black'} fontFamily={'IBM Plex Mono'} m={4} textAlign="center">
      🍵-📝-💻
      </Text> 
      {blogs.map((blog,i) =>
        <Blog key={i} link={blog.slug} title={blog.frontmatter.title} date={blog.frontmatter.date} excerpt={blog.excerpt} />
      )}
    </Layout>
    </>
  );
}

export const query = graphql`
  query BlogList {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      blogs: nodes {
        excerpt
        frontmatter {
          title
          date(formatString: "MMM DD, YYYY")          
        }
        slug
        timeToRead
      }
    }   
  }
`;

import React from 'react';
import { graphql } from 'gatsby';
import { Disqus } from "gatsby-plugin-disqus"
import Layout from '../components/Layout';
import {HeaderBack} from '../components/HeaderBack';
import { Box, Heading, Text, Image, Flex, extendTheme, ChakraProvider, UnorderedList, ListItem, Link, Divider} from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Seo from '../components/Seo';

import '../theme/styles.css'

const theme = extendTheme({
  fonts:  {
    heading: 'IBM Plex Mono',
    body: 'IBM Plex Mono',
  }
})

const chakraUiComponents = {
  h1: (props) => <Heading as="h1" paddingY="12" size="2xl" {...props} />,
  h2: (props) => <Heading as="h2" paddingTop="10" paddingBottom="4" size="xl" {...props} />,
  h3: (props) => <Heading as="h3" paddingTop="4" paddingBottom="2" size="md" {...props} />,
  h4: (props) => <Heading as="h4" paddingY="2" size="md" {...props} />,
  h5: (props) => <Heading as="h5" paddingY="2" size="sm" {...props} />,
  h6: (props) => <Heading as="h6" paddingY="2" size="xl" {...props} />,
  p: (props) => <Text lineHeight={2} paddingBottom="4" fontSize="lg" {...props} />,
  img: (props) => <Image marginBottom="4" {...props} />,
  ul: (props) => <UnorderedList {...props} />,
  li: (props) => <ListItem {...props} />,
  a: (props) => <Link {...props} color="red.500" />,
  hr: (props) => <Divider borderColor= "blackAlpha.700" orientation='horizontal' paddingTop="8" marginBottom="8" 
  {...props} />,
};

export default function MarkdownPages({ data, location }) {
  
  const { frontmatter, body, timeToRead, excerpt } = data.mdx;
  let disqusConfig = {
    url: `${location.href + body.slug}`,
    identifier: body.slug,
    title: frontmatter.title,
}

  return (
     <>
     <HeaderBack /> 
    <Layout>
      <Seo
        title={frontmatter.title}
        description={excerpt}
        image={frontmatter.cover}
      />      
      <ChakraProvider theme={theme}> 
         
      <Heading fontFamily={'IBM Plex Mono'} as="h2" size="2xl" paddingTop="52px" paddingBottom="2" color="black" align="center">{frontmatter.title}</Heading>
      <Flex justifyContent={"space-between"}>
        <p>{timeToRead} min</p>
        <p>{frontmatter.date}</p>
      </Flex>
      {frontmatter.cover &&
        <Box paddingY="2">
          <Image src={frontmatter.cover} />
        </Box>
      }
      <Box paddingY="4">
        <MDXProvider
            components={chakraUiComponents}
          >
          <MDXRenderer>
            {body}
          </MDXRenderer>
        </MDXProvider>

      </Box>
      </ChakraProvider>
      <Disqus config = { disqusConfig } />  
    </Layout>
    </>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      body
      slug
      timeToRead
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        cover
      }
    }
  }
`;

import React from 'react';
import { Link } from 'gatsby';
import { Box, Heading, Text, extendTheme } from '@chakra-ui/react';

import '../theme/styles.css'

export default function Blog({ link, title, date, excerpt }) {
  return (
    <Link to={link}>
      <Box paddingY="6" borderBottom="1px" borderColor='blackAlpha.400'>
        <Heading as="h2" color="blackAlpha.700">
          {title}
        </Heading>
        <Text color={"blackAlpha.700"} marginY="2" fontSize='sm'>
          {date}
        </Text>
        <Text>
          {excerpt}
        </Text>
      </Box>
    </Link>
  );
};

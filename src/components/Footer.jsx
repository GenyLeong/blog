import { Box, Link } from '@chakra-ui/react';
import React from 'react';

export default function Footer() {
  return (
    <footer>
      <Box color="black" padding={9}>
        <Link
        mr={14}
        href="https://twitter.com/geny_leong"
        target="_blank"
        rel="noopener noreferrer" isExternal
      >
        Twitter
      </Link>
      <Link
        mr={14}
        href="https://genyleong.github.io/"
        target="_blank"
        rel="noopener noreferrer" isExternal
      >
        Github
      </Link>
      </Box>
    </footer >
  );
}

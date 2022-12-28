import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import { Container } from '@chakra-ui/react';

import '../theme/styles.css'

export default function Layout({ children }) {
  return (
    <>      
      <Container maxW="930px" paddingY={5} marginBottom="12" fontFamily={'IBM Plex Mono'}>
        {children}
      </Container>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};


import { Box, Container, Heading, Text, Image, useColorMode} from '@chakra-ui/react';
import { Link } from 'gatsby';
import React from 'react';

import '../theme/styles.css'



export default function Header() {
  // const { colorMode, toggleColorMode } = useColorMode()

  return (
    <header >
      <Box className="header-nav">
      <Link href='https://genyleong.github.io/' fontSize="18px">Portafolio</Link> 
      </Box>
      <Box color="black" fontFamily={'IBM Plex Mono'} marginTop={8} marginLeft= {8}>
     
        <Container maxW='container.sm' paddingY={10}>  
        
        {/* <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>          */}
            <Image
            borderRadius='full'
            boxSize='140px'
            src='https://cdn.glitch.com/496050ba-32d7-4365-a29f-6df52c896215%2Fb21c20ce-49a7-4f67-b52b-d3fd9f1f7d93.jpg'
            alt='Dan Abramov'
            margin="auto"
          />
        </Container>
      </Box>
      <Container maxW="container.md" fontFamily={'IBM Plex Mono'}>          
          <Box>
          <Heading color="blackAlpha.800" size="2xl" fontFamily={'IBM Plex Mono'} marginBottom={8} textAlign="center">
              Génesis León
            </Heading>
            <Text color="blackAlpha.800" textAlign="center">Este lugar parte de la necesidad de documentar y compartir algunos conocimientos y reflexiones sobre periodismo, política y música.</Text>
          </Box>
      </Container>
    </header >
  );
}

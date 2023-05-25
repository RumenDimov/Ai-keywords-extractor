import React from 'react';
import { Heading, Image, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    
    <>
        <Heading color='white' marginBottom='1rem'>
            AI Keyword Extractor
        </Heading>
        <Text fontSize={25} textAlign='center'>
            Paste in your text below and we'll extract the keywords for you
        </Text>
    </>
  )
}

export default Header
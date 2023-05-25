import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import KeyWordsModal from './components/KeyWordsModal';

import { Container, Box } from '@chakra-ui/react';
import TextInput from './components/TextInput';

function App() {

  const [keywords, setKeywords] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);


  
  const extractKeyWords = async (text) => {
    
    setLoading(true);
    setIsOpen(true);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: 'Extract keywords from this text. Make the first letter of each word uppercase and separete with commas\n\n' + text + '',
        temperature: 0.5,
        max_tokens: 60,
        frequency_penalty: 0.8
      })
    }

    const response = await fetch(import.meta.env.VITE_OPENAI_URL, options);

    const json = await response.json();

    const data = json.choices[0].text.trim();

    console.log(data);
    setKeywords(data);
    setLoading(false);
  };


  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <Box bg='blue.600' color='white' height='100vh' paddingTop={130}>

      <Container maxW='3xl' centerContent>
        <Header />
        <TextInput extractKeyWords={extractKeyWords} />
        <Footer />
      </Container>

      <KeyWordsModal keywords={keywords}
      loading={loading}
      isOpen={isOpen}
      closeMondal={closeModal} />
      
    </Box>
  )
}

export default App

import React from 'react';
import { Text, Button, Modal, ModalOverlay, 
    ModalContent, ModalHeader, ModalFooter, 
    ModalBody, ModalCloseButton, CircularProgress } from '@chakra-ui/react';

const KeyWordsModal = ({ keywords, loading, isOpen, closeMondal }) => {
  return (
    
    <>
        <Modal isOpen={isOpen} onClose={closeMondal}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    Keywords
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody display='flex' alignItems='center' justifyContent='center'>
                    {
                        loading ? (
                            <CircularProgress isIndeterminate color='blue.300' />

                        ) : (
                            <Text>
                                {keywords}
                            </Text>
                        )
                    }
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={closeMondal}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>

        </Modal>
    
    </>
  )
}

export default KeyWordsModal
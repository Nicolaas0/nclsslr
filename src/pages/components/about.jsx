import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Box,
    Text,
    Button,
    useDisclosure,
    Link,
} from "@chakra-ui/react"
import { fontStyle } from '../../theme'
import ModBody from './child/modBody'

const About = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box>
            <Button onClick={onOpen}><Text {...fontStyle}><Link>a little story about me</Link></Text></Button>

            <Modal isOpen={isOpen} onClose={onClose} size='xl'>
                <ModalOverlay />
                <ModalContent bgColor='dark'>
                    <ModalHeader><Text fontFamily='Sora'></Text></ModalHeader>

                    <ModalBody>
                        <ModBody />
                    </ModalBody>

                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default About;
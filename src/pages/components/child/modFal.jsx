import React, { useEffect } from 'react'
import { Box, Text, Input, useDisclosure, SlideFade } from '@chakra-ui/react'
import { fontStyle } from '../../../theme'
import ModExt from './modExt'

const ModFal = ({ isInput, setInput, username, setUsername }) => {
    const { isOpen, onOpen } = useDisclosure()

    const handleKeyPress = (e) => {
        if (e.code === "Enter") {
            setInput(true)
        } else {

            setTimeout(() => {
                onOpen()
            }, 1800);
        }
    }

    const inputConfig = {
        w: '40%',
        autoCorrect: 'false',
        m: '0',
        focusBorderColor: 'dark',
        variant: 'flushed',
        size: 'md',
        value: username,
        onKeyPress: handleKeyPress,
        onChange: function (e) {
            setUsername(e.target.value)
        }
    }

    useEffect(() => {
    }, [isInput])

    return (
        <>
            <Box>
                <Text {...fontStyle} my='4'>🕵️‍♂️: Hello there! First of all, what is your name?</Text>
                <Text {...fontStyle} display="inline">😮: My name is</Text>
                <Input {...fontStyle} {...inputConfig} />
                {isOpen && username.length !== 0 ? <SlideFade in={isOpen} offsetY='20px'><ModExt username={username} /></SlideFade> : null}
            </Box>
        </>
    )
}

export default ModFal;
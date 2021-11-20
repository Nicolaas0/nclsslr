import * as React from 'react'
import { Box, Icon } from '@chakra-ui/react'
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon } from '@chakra-ui/icons'
import { FaSun } from '@react-icons/all-files/fa/FaSun'

const Switch = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const icStyle = {
        w: '2.5rem',
        h: '2.5rem',
        border: '4px',
        borderRadius: '10px',
        p: '5px'
    }
    return (
        <Box cursor='pointer' position='fixed' top='20' left='10'>
            {colorMode === 'light' ?
                <MoonIcon onClick={toggleColorMode} {...icStyle} /> :
                <Icon as={FaSun} onClick={toggleColorMode} {...icStyle} />}
        </Box>
    )
}

export default Switch;
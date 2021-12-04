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
        <Box display='flex' flexDirection='column' cursor='pointer' position='fixed' top='20' left='10'>

        </Box>
    )
}

export default Switch;
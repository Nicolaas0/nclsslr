import * as React from 'react';
import { Box, Text } from '@chakra-ui/react'
import { fontStyle } from '../theme'

const Header = () => {
    return (
        <Box align='center' position='relative' top='30vh'>
            <Text {...fontStyle}>hi, my name is Nicolaas✨</Text>
            <Text {...fontStyle}>i am a frontend developer💻</Text>
        </Box>
    )
}

export default Header;
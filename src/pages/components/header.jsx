import * as React from 'react';
import { Box, Text } from '@chakra-ui/react'
import { fontStyle } from '../../theme'

const Header = () => {
    return (
        <Box align='center'>
            <Text {...fontStyle}>hi, my name is Nicolaas✨</Text>
            <Text {...fontStyle}>i am an frontend developer💻</Text>
        </Box>
    )
}

export default Header;
import React from "react";
import { Flex, Text, Box } from '@chakra-ui/react'

const Navbar = () => {

    return (
        <Flex direction="row" justify="space-between" align="center" h="12" bgColor='theme' width='100vw'>
            <Box />
            <Text fontWeight='bold' fontSize='20' fontFamily="sora" color='white'>nclsslr</Text>
            <Box />
        </Flex>
    )
}

export default Navbar;
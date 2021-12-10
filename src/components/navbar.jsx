import React from "react";
import {
    Text, Box, Switch, Icon, Menu, Tooltip, Button
} from '@chakra-ui/react'
import { useColorMode } from "@chakra-ui/color-mode";
import { HiHome } from '@react-icons/all-files/hi/HiHome'
import { RiToolsFill } from '@react-icons/all-files/ri/RiToolsFill'
import { FaLaptopCode } from '@react-icons/all-files/fa/FaLaptopCode'

const Navbar = ({ setShow }) => {

    const { colorMode, toggleColorMode } = useColorMode()

    const navStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        h: '12',
        bgColor: 'dark',
        width: '100%',
        m: '0'
    }

    const headingStyle = {
        fontWeight: 'bold',
        fontSize: {
            sm: '15',
            lg: '15',
            xl: '20'
        },
        fontFamily: 'Sora',
        p: '0',
        mx: {
            sm: '2'
        },
    }

    const fontStyle = {
        fontWeight: 'bold',
        fontSize: {
            sm: '0',
            lg: '10',
            xl: '15'

        },
        fontFamily: 'SpaceMono',
        display: {
            sm: 'none',
            lg: 'inline'
        }
    }

    const iconStyle = {
        cursor: 'pointer',
        border: '2px transparent solid',
        w: '20px',
        h: '20px',
        paddingBottom: '4px'
    }

    const _hover = {
        _hover: {
            borderBottom: '2px solid white',
            transition: '1s',
        }
    }

    return (
        <Box {...navStyle}>
            <Box w={{ sm: '105px', lg: '200px' }}>
                <Text {...headingStyle}>nclsslr</Text>
            </Box>
            <Box display='flex' flexDirection='row' justifyContent='space-evenly' alignItems='center' w='200px'>
                <Icon {..._hover}{...iconStyle} as={HiHome} onClick={() => {
                    setShow(1)
                }} />
                <Icon {..._hover}{...iconStyle} as={FaLaptopCode} onClick={() => {
                    setShow(3)
                }} />
                <Icon {..._hover}{...iconStyle} as={RiToolsFill} onClick={() => {
                    setShow(2)
                }} />
            </Box>
            <Box w={{ sm: '105px', lg: '200px' }} onClick={toggleColorMode} cursor='pointer'>

                {
                    colorMode === 'dark' ?
                        <>
                            <Text {...fontStyle} >Light Mode?</Text>
                            <Box ml={{ sm: '4' }} display={{ sm: 'inline-block' }} boxSize>☀️</Box>
                        </>
                        :
                        <>
                            <Text {...fontStyle} display='inline'>Dark Mode?</Text>
                            <Box mx='2' display='inline'>🌚</Box>
                        </>
                }
            </Box>
        </Box>
    )
}

export default Navbar;
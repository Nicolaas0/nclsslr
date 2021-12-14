import React, { useState } from "react";
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
        paddingBottom: '4px',
    }

    const event = {
        _hover: {
            borderBottom: '1px solid white',
            transition: '1s',
        },
    }

    const emoteStyle = {
        position: 'relative',
        left: { sm: '10', xl: '0' },
        mx: { sm: '0', xl: '2' },
        display: 'inline',
    }

    return (
        <Box {...navStyle}>
            <Box w={{ sm: '105px', lg: '200px' }}>
                <Text {...headingStyle}>nclsslr</Text>
            </Box>
            <Box display='flex' flexDirection='row' justifyContent='space-evenly' alignItems='center' w='200px'>
                <Icon {...event}{...iconStyle} as={HiHome} _ onClick={() => {
                    setShow(1)
                }} />
                <Icon {...event}{...iconStyle} as={FaLaptopCode} onClick={() => {
                    setShow(3)
                }} />
                <Icon {...event}{...iconStyle} as={RiToolsFill} onClick={() => {
                    setShow(2)
                }} />
            </Box>
            <Box w={{ sm: '105px', lg: '200px' }} onClick={toggleColorMode} cursor='pointer'>

                {
                    colorMode === 'dark' ?
                        <>
                            <Text {...fontStyle} >Light Mode?</Text>
                            <Box {...emoteStyle}>☀️</Box>
                        </>
                        :
                        <>
                            <Text {...fontStyle} display='inline'>Dark Mode?</Text>
                            <Box {...emoteStyle}>🌚</Box>
                        </>
                }
            </Box>
        </Box>
    )
}

export default Navbar;
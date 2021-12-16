import React from "react";
import {
    Text, Box, Switch, Icon, Menu, Tooltip, Button
} from '@chakra-ui/react'
import { useColorMode } from "@chakra-ui/color-mode";
import { HiHome } from '@react-icons/all-files/hi/HiHome'
import { RiToolsFill } from '@react-icons/all-files/ri/RiToolsFill'
import { FaLaptopCode } from '@react-icons/all-files/fa/FaLaptopCode'

const Navbar = ({ setShow, useShow }) => {

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

    const gIcon = {
        borderRadius: '5px',
        transition: '0.1s',
        borderColor: 'light.gray',
        cursor: 'pointer',
        w: '23px',
        h: '23px',
        p: '4px',
    }

    const iconStyle = {
        home: {
            ...gIcon,
            border: useShow === 1 ? '2px solid' : null,
            color: useShow === 1 ? 'light.gray' : 'dark.gray',
        },
        skill: {
            ...gIcon,
            border: useShow === 2 ? '2px solid' : null,
            color: useShow === 2 ? 'light.gray' : 'dark.gray',
        },
        project: {
            ...gIcon,
            border: useShow === 3 ? '2px solid' : null,
            color: useShow === 3 ? 'light.gray' : 'dark.gray',
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
                <Icon {...iconStyle.home} as={HiHome} onClick={() => {
                    setShow(1)
                }} />
                <Icon {...iconStyle.skill} as={RiToolsFill} onClick={() => {
                    setShow(2)
                }} />
                <Icon {...iconStyle.project} as={FaLaptopCode} onClick={() => {
                    setShow(3)
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
        </Box >
    )
}

export default Navbar;
import React from "react";
import { Text, Box, Switch, Icon } from '@chakra-ui/react'
import { HiHome } from '@react-icons/all-files/hi/HiHome'
import { RiToolsFill } from '@react-icons/all-files/ri/RiToolsFill'
import { FaLaptopCode } from '@react-icons/all-files/fa/FaLaptopCode'

const Navbar = ({ setShow }) => {

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
        fontSize: '20',
        fontFamily: 'Sora',
        color: 'white',
        p: '0',
        mr: '50px'
    }

    const fontStyle = {
        fontWeight: 'bold',
        fontSize: '15',
        fontFamily: 'SpaceMono',
    }

    const iconStyle = {
        cursor: 'pointer'
    }

    return (
        <Box {...navStyle}>
            <Box w='200px'>
                <Text {...headingStyle}>nclsslr</Text>
            </Box>
            <Box display='flex' flexDirection='row' justifyContent='space-evenly' alignItems='center' w='200px'>
                <Icon {...iconStyle} as={HiHome} onClick={() => {
                    setShow(1)
                }} />
                <Icon {...iconStyle} as={RiToolsFill} onClick={() => {
                    setShow(2)
                }} />
                <Icon {...iconStyle} as={FaLaptopCode} onClick={() => {
                    setShow(3)
                }} />
            </Box>
            <Box w='200px'>
                <Text {...fontStyle} display='inline'>Dark Mode?</Text>
                <Box display='inline'>🌚</Box>
                <Switch display='inline' />
            </Box>
        </Box>
    )
}

export default Navbar;
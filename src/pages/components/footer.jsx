import * as React from 'react'
import { Box, Icon, Link } from '@chakra-ui/react'
import { AiFillTwitterCircle } from '@react-icons/all-files/ai/AiFillTwitterCircle'
import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub'
import { SiGmail } from '@react-icons/all-files/si/SiGmail'

const Footer = () => {

    const iconStyle = {
        m: '4',
        w: '6',
        h: '6',
        color: 'dark.lighten',
        cursor: 'pointer',
    }

    return (
        <Box w='100%' h='auto' display='flex' flexDirection='row' justifyContent='center' alignItems='center' position='fixed' left='0' bottom='0'>
            <Link isExternal href='https://twitter.com/nclsslr'> <Icon {...iconStyle} as={AiFillTwitterCircle} /></Link>
            <Link isExternal href='https://github.com/Nicolaas0'> <Icon {...iconStyle} as={AiFillGithub} /> </Link>
            <Link isExternal href='mailto:nicolerrick@gmail.com'><Icon {...iconStyle} as={SiGmail} /></Link>
        </Box>
    )
}
export default Footer
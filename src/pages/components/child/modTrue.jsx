import React from 'react'
import { Box, Text, AspectRatio, Image, Link, Tooltip, Kbd } from '@chakra-ui/react'
import twitterlogo from '../../../assests/icons/twitterlogo.svg'
import githublogo from '../../../assests/icons/githublogo.svg'
import gmaillogo from '../../../assests/icons/gmaillogo.svg'

const ModTrue = ({ username }) => {
    const headingStyle = {
        fontSize: 'xl',
        fontFamily: 'SpaceMono',
        my: '4'
    }
    const fontStyle = {
        my: '2',
        fontSize: 'md',
        fontFamily: 'SpaceMono',
    }

    return (
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <Text {...headingStyle}>🌟INTRODUCTION🌟</Text>
            <Text {...fontStyle}>Hi {username}👋, welcome to my web portofolio</Text>
            <AspectRatio maxW='100%' w='50%' ratio={1}>
                <iframe title="Welcome GIF The Office" src="https://giphy.com/embed/Id6dC0GQOOzPMXgcPv"></iframe> 
            </AspectRatio>
            <Text><p><a href="https://giphy.com/gifs/theoffice-the-office-tv-michael-scott-paper-company-Id6dC0GQOOzPMXgcPv">via GIPHY</a></p></Text>
            <Text {...fontStyle}>Let me introduce my self real quick.</Text>
            <Text {...fontStyle}>My full name is <Text textDecor='underline' display='inline'>Albert Nicolaas Augustinus Lerrick.</Text></Text>
            <Text {...fontStyle}>I was born in Jakarta and live in Bogor.</Text>
            <Text {...fontStyle}>I do like to code👨🏻‍💻 and watching movies🎞.</Text>
            <AspectRatio maxW='100%' w='50%' ratio={1}>
                <iframe title="Thats it? GIF" src="https://giphy.com/embed/LJnA13jCK3K8g"></iframe>
            </AspectRatio>
            <Text {...fontStyle}>yes thats it!, if you want to know me more, feel free to contact me:</Text>
            <Box w='100%' display='flex' flexDirection='row' justifyContent='space-evenly' alignItems='center'>
                <Tooltip label='twitter.com/nclsslr'><Link isExternal href="https://twitter.com/nclsslr"><Image src={twitterlogo}></Image></Link></Tooltip>
                <Tooltip label='github.com/Nicolaas0'><Link isExternal href="https://github.com/Nicolaas0"><Image src={githublogo}></Image></Link></Tooltip>
                <Tooltip label='Mail to nicolerrick@gmail.com'><Link isExternal href="mailto:nicolerrick@gmail.com"><Image src={gmaillogo}></Image></Link></Tooltip>
            </Box>
            <Text color='gray' alignSelf='start' mt='8'>Press <Kbd>Esc</Kbd> or click outside modal to close</Text>
        </Box>
    )
}

export default ModTrue;
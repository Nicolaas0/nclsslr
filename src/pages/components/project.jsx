import * as React from 'react'
import { Box, Text, Flex, Tag, Link, Image, } from '@chakra-ui/react'
import Carousel from './child/carousel'
import home from '../../images/home.png'
import main from '../../images/main.png'
import signup from '../../images/signup.png'
import signin from '../../images/signin.png'
import githublogo from '../../assests/icons/githublogo.svg'

const Project = () => {

    const tagStyle = {
        borderRadius: "full",
        variant: "solid",
        colorScheme: "gray",
        fontSize: {
            xl: 'sm',
            sm: '0.5rem'
        },
        p: {
            sm: '0',
            xl: '1'
        },
        mx: '2',
    }

    const headingStyle = {
        fontFamily: 'SpaceMono',
        fontSize: {
            xl: 'xl',
            sm: 'md'
        }
    }

    const fontStyle = {
        fontFamily: 'SpaceMono',
        fontSize: {
            xl: 'lg',
            sm: '0.8rem'
        }
    }

    const descStyle = {
        fontFamily: 'SpaceMono',
        fontSize: {
            xl: 'lg',
            sm: 'sm'
        }
    }

    const linkStyle = {
        color: 'blue.500',
        isExternal: 'true',
        textDecoration: 'underline',
        fontSize: {
            sm: '0.7rem',
            xl: 'lg'
        }
    }

    const content = [
        {
            title: 'Chazyy',
            img: [home, signin, signup, main],
            decs: 'Chazyy is group chat app. Chazyy created with React for frontend and Firebase for database.',
            tag: ['app-clone', 'firebase', 'react', 'styled-components'],
            repo: 'https://github.com/Nicolaas0/chazyy',
            website: 'https://chazyy.netlify.app'
        }
    ];

    return (
        <Box margin='0'>
            <Text {...headingStyle} textAlign='center' my='4'>⚡️Project⚡️</Text>
            {content.map(c => (
                <Flex direction='column' align='center' justify='center' w='100%'>
                    <Text {...fontStyle} mb='4'>{c.title}</Text>
                    <Flex direction='column' align='center'>
                        <Carousel source={c.img} />
                        <Flex direction='column' w={{ xl: '50%', sm: '75%' }}>
                            <Text {...descStyle}>{c.decs}</Text>
                            <Flex my='4' alignSelf='center'>
                                {c.tag.map(t => (
                                    <Tag {...tagStyle}>{t}</Tag>
                                ))}
                            </Flex>
                        </Flex>
                        <Flex direction='column' w={{ sm: '75%', xl: 'auto' }}>
                            <Box><Text {...fontStyle}>Repo🔗: <Link href={c.repo} {...linkStyle} >{c.repo}</Link></Text></Box>
                            <Box><Text {...fontStyle}>App🔗: <Link href={c.website} {...linkStyle}>{c.website}</Link></Text></Box>
                        </Flex>
                    </Flex>
                </Flex>
            ))}
            {/* <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center' my='4'>
                <Text mr='2' {...fontStyle}>Find more on my</Text>
                <Link isExternal href='https://github.com/Nicolaas0'><Image src={githublogo} cursor='pointer' /></Link>
            </Box> */}
        </Box>
    )
}

export default Project;

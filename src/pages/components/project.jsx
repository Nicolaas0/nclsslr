import * as React from 'react'
import { Box, Text, Flex, Tag, Link, } from '@chakra-ui/react'
import axios from 'axios'
import { fontStyle } from '../../theme'
import Carousel from './child/carousel'
import home from '../../images/home.png'
import main from '../../images/main.png'
import signup from '../../images/signup.png'
import signin from '../../images/signin.png'
import GHRepos from './child/ghRepos'

const Project = () => {

    const [data, setData] = React.useState([])

    const tagStyle = {
        borderRadius: "full",
        variant: "solid",
        colorScheme: "red",
        p: '1',
        mx: '2',
    }

    const descStyle = {
        fontFamily: 'SpaceMono',
        fontSize: '1.2rem',
    }

    const linkStyle = {
        color: 'blue.500',
        isExternal: 'true',
        textDecoration: 'underline'
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

    React.useEffect(() => {
        axios.get('https://api.github.com/users/nicolaas0/repos').then((res) => {
            const v = res.data
            console.log(res.data)
            setData(v)
        })
    }, [])

    return (
        <Box margin='0'>
            <Text {...fontStyle} textAlign='center' my='4'>⚡️Project⚡️</Text>
            {content.map(c => (
                <Flex direction='column' align='center' justify='center' w='100%'>
                    <Text {...fontStyle} mb='4'>{c.title}</Text>
                    <Flex direction='column' align='center'>
                        <Carousel source={c.img} />
                        <Flex direction='column' w='50%'>
                            <Text {...descStyle}>{c.decs}</Text>
                            <Flex my='4' alignSelf='center'>
                                {c.tag.map(t => (
                                    <Tag {...tagStyle}>{t}</Tag>
                                ))}
                            </Flex>
                        </Flex>
                        <Flex direction='column'>
                            <Box><Text {...fontStyle}>Repo🔗: 🌟<Link href={c.repo} {...linkStyle} >{c.repo}</Link>🌟</Text></Box>
                            <Box><Text {...fontStyle}>App🔗: 🔥<Link href={c.website} {...linkStyle}>{c.website}</Link>🔥</Text></Box>
                        </Flex>
                    </Flex>
                </Flex>
            ))}
            <Text {...fontStyle} textAlign='center' my='4'>My little projects</Text>
            {
                data ? <GHRepos data={data} /> : null
            }
        </Box>
    )
}

export default Project;

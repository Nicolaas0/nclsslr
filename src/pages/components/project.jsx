import * as React from 'react'
import { Box, Text, Flex, Image, Tag } from '@chakra-ui/react'
import { fontStyle, imgStyle } from '../../theme'
import chazyy from '../../images/chazyyss.png'

const Project = () => {

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
    const content = [
        {
            title: 'Chazyy',
            img: chazyy,
            decs: 'Chazyy is group chat app. Chazyy created with React for frontend and Firebase for database.',
            tag: ['app-clone', 'firebase'],
        }
    ];

    return (
        <Box>
            <Text {...fontStyle} textAlign='center'>Project⚡️</Text>
            {content.map(c => (
                <Flex direction='column' w='100vw'>
                    <Text {...fontStyle} alignSelf='start' mb='4'>{c.title}</Text>
                    <Flex direction='row' justify='space-around'>
                        <Image {...imgStyle} src={c.img} />
                        <Flex direction='column' w='50%'>
                            <Text {...descStyle}>{c.decs}</Text>
                            <Flex my='4'>
                                {c.tag.map(t => (
                                    <Tag {...tagStyle}>{t}</Tag>
                                ))}
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            ))}
        </Box>
    )
}

export default Project;

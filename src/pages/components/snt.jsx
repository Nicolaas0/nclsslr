import * as React from 'react';
import { Box, Text, UnorderedList, ListItem, Image, Badge } from '@chakra-ui/react'
import { fontStyle } from '../../theme';
import reactlogo from '../../assests/icons/reactlogo.svg'
import firebaselogo from '../../assests/icons/firebaselogo.svg'
import nodelogo from '../../assests/icons/nodelogo.svg'
import exprlogo from '../../assests/icons/expresslogo.png'
import andrlogo from '../../assests/icons/androidlogo.svg'
import figmalogo from '../../assests/icons/figmalogo.svg'
import javalogo from '../../assests/icons/javalogo.svg'

const Snt = () => {
    const bStatus = {
        SL: {
            colorScheme: 'green',
            caption: 'still learning'
        },
        BSC: {
            colorScheme: 'blue',
            caption: 'basic 100%'
        },
        MN: {
            colorScheme: 'red',
            caption: 'MAIN SKILL'
        },
        NXT: {
            caption: 'nextJS'
        },
        GBY: {
            colorScheme: 'purple',
            caption: 'Gatsby'
        },
        TL: {
            colorScheme: 'yellow',
            caption: 'Tools'
        }
    }

    const content = [{
        icon: reactlogo,
        skills: 'React',
        badge: [bStatus.MN, bStatus.SL, bStatus.NXT, bStatus.GBY]
    }, {
        icon: javalogo,
        skills: 'Java',
        badge: [bStatus.BSC, bStatus.SL]
    }, {
        icon: firebaselogo,
        skills: 'Firebase',
        badge: [bStatus.BSC]
    }, {
        icon: nodelogo,
        skills: 'Node',
        badge: [bStatus.BSC, bStatus.SL]
    },
    {
        icon: exprlogo,
        skills: 'Express',
        badge: [bStatus.MN, bStatus.BSC, bStatus.SL]
    },
    {
        icon: andrlogo,
        skills: 'Android',
        badge: [bStatus.BSC, bStatus.SL]
    },
    {
        icon: figmalogo,
        skills: 'Figma',
        badge: [bStatus.TL, bStatus.SL]
    },
    ]

    const fontStyle = {
        fontFamily: 'SpaceMono',
        fontSize: '1.5rem',
        mx: '4'
    }
    const iconStyle = {
        w: '2rem',
        h: '2rem',
        mr: '10'
    }
    const listStyle = {
        listStyleType: 'none',
        display: 'flex',
        flexDirection: 'row'
    }
    const badgeStyle = {
        h: '50%',
        alignSelf: 'center',
        mx: '2',
        variant: 'subtle',
        borderRadius: '5',
        p: '1'
    }

    return (
        <Box>
            <Text {...fontStyle}>my skills and tools:</Text>
            {
                content.map((c) => (
                    <UnorderedList my='1rem'>
                        <ListItem {...listStyle}>
                            <Image src={c.icon} {...iconStyle} />
                            <Text {...fontStyle}>{c.skills}</Text>
                            {
                                c.badge.map(b => (
                                    <Badge colorScheme={b.colorScheme} {...badgeStyle}>{b.caption}</Badge>
                                ))
                            }
                            {/* <Badge colorScheme={c.badge.colorScheme} {...badgeStyle}>{c.badge.caption}</Badge> */}
                        </ListItem>
                    </UnorderedList>
                ))
            }
        </Box>

    )
}

export default Snt;
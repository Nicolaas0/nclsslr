import * as React from 'react';
import { Box, Text, UnorderedList, ListItem, Image, Badge, Tooltip } from '@chakra-ui/react'
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
            caption: 'still learning',
            label: 'Always learning and improving at this skills'
        },
        BSC: {
            colorScheme: 'blue',
            caption: 'basic 100%',
            label: 'Master all the basic in this skill'
        },
        MN: {
            colorScheme: 'red',
            caption: 'MAIN SKILL',
            label: 'This skills i\'m very confident of'
        },
        NXT: {
            caption: 'nextJS',
            label: 'I can work with nextJS framework'
        },
        GBY: {
            colorScheme: 'purple',
            caption: 'Gatsby',
            label: 'I can work with Gatsby framework'
        },
        TL: {
            colorScheme: 'yellow',
            caption: 'Tools',
            label: 'I can use this tool'
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
        p: '1',
        cursor: 'pointer'
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
                                    <Tooltip hasArrow label={b.label}><Badge colorScheme={b.colorScheme} {...badgeStyle}>{b.caption}</Badge></Tooltip>
                                ))
                            }
                        </ListItem>
                    </UnorderedList>
                ))
            }
        </Box>

    )
}

export default Snt;
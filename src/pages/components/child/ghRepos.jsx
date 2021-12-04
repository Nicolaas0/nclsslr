import * as React from 'react'
import {
    SimpleGrid,
    Text,
    Flex,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Link
} from '@chakra-ui/react'

const GHRepos = ({ data }) => {

    const headingStyle = {
        fontFamily: 'SpaceMono',
        fontSize: 'md',
    }

    const accorStyle = {
        border: '1px white',
        w: '100%'
    }

    const bodyStyle = {
        fontFamily: 'Sora',
        fontSize: 'sm',
    }

    const linkStyle = {
        fontFamily: 'Sora',
        fontSize: 'sm',
        my: '2',
        color: 'blue.500',
        textDecoration: 'underline',
        isExternal: 'true',
    }

    const dateStyle = {
        fontFamily: 'Sora',
        fontSize: 'xs',
        color: 'gray',
        alignSelf: 'start'
    }

    return (
        <>
            <SimpleGrid columns={3} spacing={10} w='100%'>
                {
                    data.map((d) => (
                        <Flex flexDirection="column" alignItems="center" w='25vw'>
                            <Accordion {...accorStyle} allowMultiple>
                                <AccordionItem>
                                    <AccordionButton w='100%'>
                                        <Text {...headingStyle} w='100%'>{d.name}</Text>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={4} w='100%' alignItems='center' display="flex" flexDirection='column'>
                                        <Text {...bodyStyle}>{d.description}</Text>
                                        <Link {...linkStyle} href={d.html_url}><Text>🔗: {d.html_url}</Text></Link>
                                        <Text {...dateStyle} align>{d.created_at}</Text>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Flex>
                    ))
                }
            </SimpleGrid>
        </>
    )
}

export default GHRepos
import * as React from 'react'
import axios from 'axios'
import {
    SimpleGrid,
    Text,
    Link,
    Box
} from '@chakra-ui/react'

const GHRepos = () => {

    const [data, setData] = React.useState([])

    React.useEffect(() => {
        axios.get('https://api.github.com/users/nicolaas0/repos').then((res) => {
            const v = res.data
            console.log(res.data)
            setData(v)
        })
    }, [])

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
                    data ? data.map((d) => (
                        <Box h='auto' maxW='20vw' mx='4' textAlign='center'>
                            <Text {...headingStyle}>{d.name}</Text>
                            <Text {...bodyStyle}>{d.description}</Text>
                            <Link {...linkStyle}>{d.html_url}</Link>
                        </Box>
                    )) : null
                }
            </SimpleGrid>
        </>
    )
}

export default GHRepos
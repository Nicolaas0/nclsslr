import React from 'react'
import { Text, Kbd } from '@chakra-ui/react'
import { fontStyle } from '../../../theme'

const ModExt = ({ username }) => {
    return (
        <>
            <Text my='4'{...fontStyle}>🕵️‍♂️: It's nice to meet you, {username}!</Text>
            <Text my='2' color="gray" fontFamily='sora' fontSize="sm" mt='8'>Tip: Press <Kbd>Enter</Kbd> to continue</Text>
        </>
    )
}

export default ModExt;
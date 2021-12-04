import React, { useEffect, useState } from 'react'
import ModFal from './modFal'
import ModTrue from './modTrue'

const ModBody = () => {
    const [isInput, setInput] = useState(false)
    const [username, setUsername] = useState('')

    useEffect(() => {

    }, [isInput])
    return (
        <>
            {
                isInput ? <ModTrue username={username} /> : <ModFal isInput={isInput} setInput={setInput} username={username} setUsername={setUsername} />
            }
        </>
    )
}

export default ModBody
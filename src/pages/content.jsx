import * as React from 'react'
import Header from './components/header'
import Project from './components/project'
import Snt from './components/snt'

const Content = ({ useShow }) => {
    if (useShow === 1) {
        return <Header />
    } if (useShow === 2) {
        return <Project />
    } if (useShow === 3) {
        return <Snt />
    }
}

export default Content
import * as React from 'react'
import Header from './components/header'
import Project from './components/project'
import Snt from './components/snt'

const Content = ({ useShow }) => {
    let component
    if (useShow === 1) {
        component = <Header />
    } if (useShow === 2) {
        component = <Project />
    } if (useShow === 3) {
        component = <Snt />
    }

    return component
}

export default Content
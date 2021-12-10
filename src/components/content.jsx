import * as React from 'react'
import Header from './header'
import Project from './project'
import Snt from './snt'

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
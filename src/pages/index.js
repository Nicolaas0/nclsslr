import * as React from "react";
import Navbar from './components/navbar'
import Header from './components/header'
import Project from './components/project'
// import Switch from './components/switch'
import Snt from './components/snt'
import {
  ChakraProvider,
  VStack,
} from "@chakra-ui/react"
import theme from "../theme";
import '@fontsource/sora'
import '@fontsource/space-mono'

// markup
const IndexPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <VStack width='100vw' height='100vh' bgColor='dark' spacing='10'>
        <Navbar w='100vw' />
        <Header />
        <Project />
        {/* <Snt /> */}
        {/* <Switch /> */}
      </VStack>
    </ChakraProvider >
  )
}

export default IndexPage

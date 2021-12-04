import * as React from "react";
import Navbar from './components/navbar'
import Header from './components/header'
import Project from './components/project'
import Switch from './components/switch'
import Snt from './components/snt'
import About from './components/about'
import Content from './content'
import {
  ChakraProvider,
  VStack,
  Box
} from "@chakra-ui/react"
import theme from "../theme";
import '@fontsource/sora'
import '@fontsource/space-mono'
import '@fontsource/roboto-mono'

// markup
const IndexPage = () => {

  const [useShow, setShow] = React.useState(1)

  return (
    <ChakraProvider theme={theme}>
      <Box minHeight='100vh' maxHeight='100%' backgroundColor='dark'>
        <Navbar setShow={setShow} />
        <Box minHeight='80vh' maxHeight='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
          <Content useShow={useShow} />
        </Box>
      </Box>
    </ChakraProvider >
  )
}

export default IndexPage

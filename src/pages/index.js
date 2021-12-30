import * as React from "react";
import Navbar from '../components/navbar'
import Content from '../components/content'
import { Helmet } from 'react-helmet'
import {
  ChakraProvider,
  VStack,
  Box,
} from "@chakra-ui/react"
import theme from "../theme";
import '@fontsource/sora'
import '@fontsource/space-mono'
import '@fontsource/roboto-mono'
import Footer from "../components/footer";

// markup
const IndexPage = () => {

  const [useShow, setShow] = React.useState(1)

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>nclsslr</title>
      </Helmet>

      <ChakraProvider theme={theme}>
        <Box minHeight='100vh' maxHeight='100%' maxW='100%'>
          <Navbar setShow={setShow} useShow={useShow} />
          <Box minHeight='100%' maxHeight='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <Content useShow={useShow} />
          </Box>
          <Footer />
        </Box>
      </ChakraProvider >
    </>
  )
}

export default IndexPage

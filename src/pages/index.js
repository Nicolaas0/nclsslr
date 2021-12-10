import * as React from "react";
import Navbar from '../components/navbar'
import Content from '../components/content'
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
    <ChakraProvider theme={theme}>
      <Box minHeight='100vh' maxHeight='100%' maxW='100%'>
        <Navbar setShow={setShow} />
        <Box minHeight='80vh' maxHeight='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
          <Content useShow={useShow} />
        </Box>
        <Footer />
      </Box>
    </ChakraProvider >
  )
}

export default IndexPage

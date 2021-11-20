import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    fonts: {
        Sora: "Sora",
        SpaceMono: "Space Mono",
    },
    colors: {
        dark: '#171717',
        theme: '#FF0044',
        white: '#FFF'
    },
    initialColorMode: "light",
    useSystemColorMode: false,
})

export default extendTheme(theme);

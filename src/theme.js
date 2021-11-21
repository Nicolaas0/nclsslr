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

export const fontStyle = {
    fontFamily: 'SpaceMono',
    fontSize: '1.5rem',
    mx: '4'
}

export const imgStyle = {
    w: '40%',
    h: '40%'
}

export default extendTheme(theme);

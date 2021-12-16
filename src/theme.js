import { extendTheme } from "@chakra-ui/react"
import { mode, createBreakpoints } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('white', 'dark.ori')(props),
        },
    }),
}

const breakpoints = createBreakpoints({
    sm: '320px',
    md: '481px',
    lg: '768px',
    xl: '1025px',
})

const theme = extendTheme({
    fonts: {
        Sora: "Sora",
        SpaceMono: "Space Mono",
        RobotoMono: "Roboto Mono",
    },
    colors: {
        dark: {
            ori: '#080708',
            lighten: '#544954',
            gray: mode('#5B5B5B', '#A4A4A4')
        },
        white: '#FFF',
        light: {
            gray: mode('#242424', '#DBDBDB')
        }
    },
    shadows: {
        outline: 'dark'
    },
    initialColorMode: "light",
    useSystemColorMode: false,
    styles,
    breakpoints,
})

export const fontStyle = {
    fontFamily: 'SpaceMono',
    fontSize: {
        sm: '1rem',
        xl: '1.5rem',
    },
    mx: '4',
}

export const imgStyle = {
    w: '40%',
    h: '40%'
}

export default extendTheme(theme);

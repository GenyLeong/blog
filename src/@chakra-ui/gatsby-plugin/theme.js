import { extendTheme } from "@chakra-ui/react"


const theme = extendTheme({
    config: {
        useSystemColorMode: true,
    },
    fonts:  {
        heading: 'IBM Plex Mono',
        body: 'IBM Plex Mono',
      },
      colors: {
        transparent: 'transparent'
    }
  })

export default extendTheme(theme)
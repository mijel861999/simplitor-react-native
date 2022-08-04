import { extendTheme } from 'native-base'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light'
}

const colors = {
  primary: {
    50: '#F2F2F2',
    100: '#98A668',
    200: '#465902',
    300: '#6E8C03',
    400: '#1A2601'
  }
}

export default extendTheme({ config, colors })

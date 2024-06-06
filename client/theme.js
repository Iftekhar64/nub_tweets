import { createMuiTheme } from '@material-ui/core/styles'
import { orange, blue } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
      primary: {
      light: '#52c7b8',
      main: '#122a94',
      dark: '#00675b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffd95b',
      main: '#ffa726',
      dark: '#c77800',
      contrastText: '#000',
    },
      openTitle: blue['900'],
      protectedTitle: orange['700'],
      type: 'light'
    }
  })

  export default theme  

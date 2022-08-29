import * as React from 'react'
import { ThemeProvider } from 'styled-components'

import ContrastChecker from './steps/ContrastChecker'

import GlobalStyle from './styles/global'
import { theme } from './styles/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ContrastChecker />
  </ThemeProvider>
)

export default App

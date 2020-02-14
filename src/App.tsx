import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Resume } from './components'
import { GlobalStyle, theme } from './styles'

type ThemeType = typeof theme

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Resume />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export { ThemeType }
export default App

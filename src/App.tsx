import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import NoMatch from './components/NoMatch'
import { Resume } from './components'
import { GlobalStyle, theme } from './styles'

type ThemeType = typeof theme

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cv" component={Resume} />
        <Route path="*" component={NoMatch} />
      </Switch>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export { ThemeType }
export default App

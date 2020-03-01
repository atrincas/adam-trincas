import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import NoMatch from './components/NoMatch'
import { Resume } from './components'
import { GlobalStyle, theme } from './styles'
import Footer from './components/Footer'

type ThemeType = typeof theme

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/">
          <Home />
          <Footer fixedPosition={true} />
        </Route>

        {/* Footer is inside Resume component */}
        <Route exact path="/cv" component={Resume} />

        <Route path="*">
          <NoMatch />
          <Footer fixedPosition={true} />
        </Route>
      </Switch>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export { ThemeType }
export default App

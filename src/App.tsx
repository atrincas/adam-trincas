import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Switch, Route, useLocation } from 'react-router-dom'

import Home from './components/Home'
import NoMatch from './components/NoMatch'
import { Resume } from './components'
import { GlobalStyle, theme } from './styles'
import Footer from './components/Footer'

type ThemeType = typeof theme

function renderFooter() {
  let location = useLocation()

  if (location.pathname === '/cv') {
    return <Footer fixedPosition={false} />
  } else {
    return <Footer fixedPosition={true} />
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cv" component={Resume} />
        <Route path="*" component={NoMatch} />
      </Switch>
      {renderFooter()}
      <GlobalStyle />
    </ThemeProvider>
  )
}

export { ThemeType }
export default App

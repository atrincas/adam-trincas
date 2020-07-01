import React, { useContext, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import i18n from './i18n'
import { store } from './store'
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import { Resume } from './components'
import { GlobalStyle, theme } from './styles'

type ThemeType = typeof theme

function App() {
  const { dispatch } = useContext(store)

  useEffect(() => {
    const currentLanguage = () => i18n.language || window.localStorage.i18nextLng
    dispatch({ type: 'LANGUAGE_CHANGED', value: currentLanguage() })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/cv" component={Resume} />

        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export { ThemeType }
export default App

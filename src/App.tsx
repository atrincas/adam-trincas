import React, { useContext, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { Switch, Route, Redirect } from 'react-router-dom'

import i18n from './i18n'
import { store } from './store'
import Home from './components/Home'
import { Resume, ResumePDF } from './components'
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

        <Route exact path="/cv-pdf/:lang" component={ResumePDF} />

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export { ThemeType }
export default App

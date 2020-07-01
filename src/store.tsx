import React, { createContext, useReducer } from 'react'
import { State, Action, Children, Context } from './types'
import i18n from './i18n'

const initialState = {
  language: '',
}
const store = createContext({} as Context)
const { Provider } = store

const StateProvider = ({ children }: Children) => {
  const [state, dispatch] = useReducer((state: State = initialState, action: Action): State => {
    switch (action.type) {
      case 'LANGUAGE_CHANGED':
        i18n.changeLanguage(action.value)
        return { ...state, language: action.value }
      default:
        throw new Error()
    }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }

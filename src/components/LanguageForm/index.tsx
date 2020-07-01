import React, { useContext } from 'react'
import { Base } from './styles'
import { store } from '../../store'

function LanguageForm() {
  const { state, dispatch } = useContext(store)

  return (
    <Base>
      <label htmlFor="language-select"></label>
      <select
        id="language-select"
        value={state.language}
        onChange={(e) => {
          dispatch({ type: 'LANGUAGE_CHANGED', value: e.target.value })
        }}
      >
        <option value="nl">Nederlands</option>
        <option value="en">English</option>
      </select>
    </Base>
  )
}

export default LanguageForm

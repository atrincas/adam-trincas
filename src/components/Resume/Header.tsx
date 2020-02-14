import React from 'react'
import { HeaderContainer } from './styles'

function Header({ children, name, title }) {
  return (
    <HeaderContainer>
      {children}
      <hgroup>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </hgroup>
    </HeaderContainer>
  )
}

export { Header }

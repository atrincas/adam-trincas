import React from 'react'
import { HeaderContainer } from './styles'

type Props = {
  children: React.ReactNode
  name: string
  title: string
}

function Header({ children, name, title }: Props) {
  return (
    <HeaderContainer>
      {children}
      <hgroup>
        <h1>{name}</h1>
        <div>
          <h2>
            <span>{title}</span>
          </h2>
        </div>
      </hgroup>
    </HeaderContainer>
  )
}

export { Header }

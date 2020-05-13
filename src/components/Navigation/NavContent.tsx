import React from 'react'
import { NavContentContainer, StyledLink } from './styles'

function NavContent({ open }: { open: boolean }) {
  return (
    <NavContentContainer open={open} aria-hidden={!open}>
      <ul>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
      </ul>
    </NavContentContainer>
  )
}

export default NavContent

import React from 'react'
import styled from 'styled-components'
import { Link, desktopUp } from '../../styles'

const Base = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.darkBlue};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  width: 100%;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.9;
  transition: transform 0.3s ease-in-out;
`

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.fontSizes.mobile.large};
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.lightBlue};
    text-decoration: underline;
  }

  ${desktopUp} {
    font-size: ${({ theme }) => theme.typography.fontSizes.desktop.extraLarge};
  }
`

function NavContent({ open }: { open: boolean }) {
  return (
    <Base open={open} aria-hidden={!open}>
      <ul>
        <li>
          <StyledLink href="/">Home</StyledLink>
        </li>
      </ul>
    </Base>
  )
}

export default NavContent

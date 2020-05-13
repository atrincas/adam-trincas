import styled, { keyframes, css } from 'styled-components'
import { Link } from 'react-router-dom'
import { desktopUp } from '../../styles'

export const BurgerContainer = styled.button<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  outline: none;
  right: ${({ theme }) => theme.gutters.mobile.extraSmall};
  position: fixed;

  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) => (open ? theme.colors.white : theme.colors.darkBlue)};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`

export const movedown = keyframes`
  from {
    transform: translateY(-5rem);
  }
  to {
    transform: translateY(0rem);
  }
`

export const burgerPosition = (sticky?: boolean, open?: boolean) => {
  if (!sticky || (sticky && open)) return ``
  if (sticky && !open)
    return css`
      position: fixed;
      animation: ${movedown} 0.5s ease-in-out;
    `
}

export const MenuHeader = styled.div<{ sticky?: boolean; open?: boolean }>`
  display: flex;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.gutters.mobile.extraSmall} 0;
  width: 100%;

  ${({ sticky, open }) => burgerPosition(sticky, open)}
`

export const NavContentContainer = styled.nav<{ open: boolean }>`
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

export const StyledLink = styled(Link)`
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

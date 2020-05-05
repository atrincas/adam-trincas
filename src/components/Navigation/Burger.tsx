import React from 'react'
import styled from 'styled-components'

const Base = styled.button<{ open: boolean }>`
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

type Props = {
  open: boolean
  setActive: (open: boolean) => void
}

function Burger({ open, setActive }: Props) {
  return (
    <Base
      aria-label="Toggle menu"
      aria-expanded={open ? true : false}
      open={open}
      onClick={() => setActive(!open)}
    >
      <span />
      <span />
      <span />
    </Base>
  )
}

export default Burger

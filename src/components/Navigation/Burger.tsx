import React from 'react'
import { BurgerContainer } from './styles'

type Props = {
  open: boolean
  setActive: (open: boolean) => void
}

function Burger({ open, setActive }: Props) {
  return (
    <BurgerContainer
      aria-label="Toggle menu"
      aria-expanded={open ? true : false}
      open={open}
      onClick={() => setActive(!open)}
    >
      <span />
      <span />
      <span />
    </BurgerContainer>
  )
}

export default Burger

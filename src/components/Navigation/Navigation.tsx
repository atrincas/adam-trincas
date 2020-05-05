import React, { useState, useEffect, useRef } from 'react'
import styled, { keyframes, css } from 'styled-components'
import debounce from 'lodash/debounce'
import { MobileOnly, DesktopOnly } from '../../styles'
import Burger from './Burger'
import NavContent from './NavContent'

const movedown = keyframes`
  from {
    transform: translateY(-5rem);
  }
  to {
    transform: translateY(0rem);
  }
`

const burgerPosition = (sticky?: boolean, open?: boolean) => {
  if (!sticky || (sticky && open)) return ``
  if (sticky && !open)
    return css`
      position: fixed;
      animation: ${movedown} 0.5s ease-in-out;
    `
}

const MenuHeader = styled.div<{ sticky?: boolean; open?: boolean }>`
  display: flex;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.gutters.mobile.extraSmall} 0;
  width: 100%;

  ${({ sticky, open }) => burgerPosition(sticky, open)}
`

function Navigation() {
  const [active, setActive] = useState(false)
  const [isSticky, setSticky] = useState(false)
  const stickyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    checkSticky()
    window.addEventListener(
      'scroll',
      debounce(() => checkSticky(), 20)
    )
    return () => window.removeEventListener('scroll', checkSticky)
  }, [])

  function handleMobileBurger(open: boolean) {
    setActive(open)
    if (open) {
      console.log(open)
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = ''
    }
  }

  function checkSticky() {
    if (!stickyRef || !stickyRef.current) return
    window.pageYOffset > stickyRef.current.getBoundingClientRect().bottom
      ? setSticky(true)
      : setSticky(false)
  }

  return (
    <>
      <MobileOnly>
        <MenuHeader ref={stickyRef} sticky={isSticky} open={active}>
          <Burger open={active} setActive={(open: boolean) => handleMobileBurger(open)} />
        </MenuHeader>
        <NavContent open={active} />
      </MobileOnly>

      <DesktopOnly>
        <MenuHeader>
          <Burger open={active} setActive={setActive} />
        </MenuHeader>
        <NavContent open={active} />
      </DesktopOnly>
    </>
  )
}

export { Navigation }

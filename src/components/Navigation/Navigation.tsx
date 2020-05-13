import React, { useState, useEffect, useRef } from 'react'
import debounce from 'lodash/debounce'
import { MobileOnly, DesktopOnly } from '../../styles'
import Burger from './Burger'
import NavContent from './NavContent'
import { MenuHeader } from './styles'

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

import React from 'react'
import styled from 'styled-components'
import { ReactIcon } from '../Icons'

const Base = styled.footer`
  width: 100%;
  font-style: italic;
  text-align: center;
  padding: ${(props) => props.theme.gutters.mobile.extraSmall};
`
const Link = styled.a`
  color: ${(props) => props.theme.colors.blue};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

function Footer() {
  return (
    <Base>
      <p>
        Build in React <ReactIcon />
      </p>
      <p>
        Source code available on{' '}
        <Link href="https://github.com/atrincas/personal-website" target="_blank">
          GitHub
        </Link>
        .
      </p>
    </Base>
  )
}

export default Footer

import React from 'react'
import styled, { css } from 'styled-components'
import { ReactIcon } from '../Icons'

function position(fixedPosition?: boolean) {
  if (fixedPosition) {
    return css`
      position: fixed;
      bottom: 0;
    `
  } else {
    return css`
      position: absolute;
    `
  }
}

const Base = styled.footer<{ fixedPosition?: boolean }>`
  ${props => position(props.fixedPosition)}
  width: 100%;
  font-style: italic;
  text-align: center;
  padding: ${props => props.theme.gutters.mobile.extraSmall} 0;
`
const Link = styled.a`
  color: ${props => props.theme.colors.blue};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

function Footer({ fixedPosition }: { fixedPosition?: boolean }) {
  return (
    <Base fixedPosition={fixedPosition}>
      <p>
        Build in React <ReactIcon />. Source code available on{' '}
        <Link href="https://github.com/atrincas" target="_blank">
          GitHub
        </Link>
        .
      </p>
    </Base>
  )
}

export default Footer

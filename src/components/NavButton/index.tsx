import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { HomeIcon } from '../Icons'
import { desktopUp } from '../../styles'

const Base = styled.section`
  display: flex;
  justify-content: flex-start;
  margin-top: ${(props) => props.theme.gutters.mobile.medium};

  ${desktopUp} {
    justify-content: center;
    margin-top: 0;
    margin-bottom: ${(props) => props.theme.gutters.desktop.medium};
  }
`

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.darkBlue};
  background-color: ${props => props.theme.colors.white};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.blue};
    text-decoration: underline;
  }
`

function NavButton() {
  return (
    <Base>
      <StyledLink to="/"><HomeIcon />Start</StyledLink>
    </Base>
  )
}

export default NavButton
import styled from 'styled-components'
import { desktopUp } from '../../styles'

export const Base = styled.main`
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

  ${desktopUp} {
    top: 50%;
  }
`
export const Heading = styled.h1`
  font-size: ${props => props.theme.typography.fontSizes.mobile.superLarge};
  font-weight: ${props => props.theme.typography.fontWeights.bold};
  text-align: center;

  ${desktopUp} {
    font-size: ${props => props.theme.typography.fontSizes.desktop.superLarge};
`

export const SubHeading = styled.h2`
  font-size: ${props => props.theme.typography.fontSizes.mobile.large};
  font-style: italic;
  color: ${props => props.theme.colors.blue};
  text-align: center;

  ${desktopUp} {
    font-size: ${props => props.theme.typography.fontSizes.desktop.extraLarge};
`

export const Nav = styled.nav`
  text-align: center;
  margin-top: ${props => props.theme.gutters.desktop.large};
`

export const Link = styled.a`
  position: relative;
  display: inline-block;
  width: 15rem;
  height: auto;
  cursor: pointer;
  outline: none;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;

  &:hover {
    .circle {
      width: 100%;
    }

    .text {
      color: white;
    }
  }
`

export const Circle = styled.span`
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: relative;
  display: block;
  margin: 0;
  width: 3rem;
  height: 3rem;
  background: ${props => props.theme.colors.darkBlue};
  border-radius: 1.625rem;
`

export const Arrow = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  left: 0.625rem;
  width: 1.125rem;
  height: 0.125rem;
  background: none;

  &::before {
    position: absolute;
    content: '';
    top: -0.25rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid ${props => props.theme.colors.white};
    border-right: 0.125rem solid ${props => props.theme.colors.white};
    transform: rotate(45deg);
  }

  &::after {
    box-sizing: border-box;
  }

  &:hover {
    background: ${props => props.theme.colors.white};
    transform: translate(1rem, 0);
  }
`

export const Text = styled.span`
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 2rem;
  color: ${props => props.theme.colors.darkBlue};
  font-weight: ${props => props.theme.typography.fontWeights.bold};
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
`

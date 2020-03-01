import styled from 'styled-components'
import { desktopUp } from '../../styles/BreakPoints'
import profilePicture from '../../images/atrincas.jpeg'

export const Base = styled.div`
  color: ${props => props.theme.colors.darkBlue};
  background-color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.gutters.mobile.medium} 0;
  font-size: ${props => props.theme.typography.fontSizes.mobile.small};

  ${desktopUp} {
    max-width: 950px;
    margin: 0 auto;
    font-size: ${props => props.theme.typography.fontSizes.desktop.small};
    border: 1px solid ${props => props.theme.colors.darkBlue};
    border-radius: 5px;
  }
`

export const HeaderContainer = styled.header`
  margin-bottom: 10rem;
  text-align: center;

  & h1 {
    font-size: ${props => props.theme.typography.fontSizes.mobile.extraLarge};
    font-weight: ${props => props.theme.typography.fontWeights.bold};
    margin: ${props => props.theme.gutters.mobile.medium} 0;
  }

  & h2 {
    font-size: ${props => props.theme.typography.fontSizes.mobile.large};
    font-style: italic;
    color: ${props => props.theme.colors.blue};
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #000;
    line-height: 0.1em;
    margin: 10px 0 20px;

    & span {
      background: #fff;
      padding: 0 10px;
    }
  }

  ${desktopUp} {
    margin-bottom: 5rem;

    & h1 {
      font-size: ${props => props.theme.typography.fontSizes.desktop.large};
      margin: ${props => props.theme.gutters.desktop.medium};
    }

    & h2 {
      font-size: ${props => props.theme.typography.fontSizes.desktop.medium};
    }
  }
`

export const SectionHeader = styled.header<{ fullWidth?: boolean }>`
  display: block;
  font-size: ${props => props.theme.typography.fontSizes.mobile.large};
  font-style: italic;
  font-weight: ${props => props.theme.typography.fontWeights.bold};
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.blue};
  padding: ${props => props.theme.gutters.mobile.extraSmall};
  width: auto;

  & h3 {
    display: inline;
  }

  ${desktopUp} {
    font-size: ${props => props.theme.typography.fontSizes.desktop.medium};
    width: auto;
    padding: ${props => props.theme.gutters.desktop.extraSmall};
  }
`

export const MainSection = styled.section`
  margin-top: ${props => props.theme.gutters.mobile.large};

  ${desktopUp} {
    margin-top: 0;
    padding-left: ${props => props.theme.gutters.desktop.extraLarge};
  }
`

export const Main = styled.main`
  display: grid;
  grid-template-areas: 'aside' 'main';

  ${desktopUp} {
    grid-template-columns: 1fr 2fr;
  }
`

export const ProfilePicture = styled.div`
  display: inline-block;
  width: 350px;
  height: 350px;
  background: url(${profilePicture}) center / contain no-repeat;
  border: 2px solid ${props => props.theme.colors.white};
  border-radius: 50%;

  ${desktopUp} {
    width: 150px;
    height: 150px;
  }
`

export const SideSection = styled.section`
  padding-right: ${props => props.theme.gutters.mobile.medium};

  ${desktopUp} {
    padding-right: ${props => props.theme.gutters.desktop.medium};
  }
`

export const SideSubSection = styled.section``

export const SideSubSectionHeader = styled.header`
  display: block;
  font-size: ${props => props.theme.typography.fontSizes.mobile.large};
  font-style: italic;
  font-weight: ${props => props.theme.typography.fontWeights.bold};

  & h3 {
    display: inline;
  }

  &::before,
  &::after {
    content: ' ';
    display: block;
    width: 100%;
    border: 1px solid ${props => props.theme.colors.darkBlue};
    margin: ${props => props.theme.gutters.mobile.extraSmall};
  }

  ${desktopUp} {
    font-size: ${props => props.theme.typography.fontSizes.desktop.medium};

    &::before,
    &::after {
      margin: ${props => props.theme.gutters.desktop.extraSmall};
    }
  }
`

export const SubSectionTitleWrapper = styled.div`
  padding: 0 ${props => props.theme.gutters.mobile.extraSmall};

  ${desktopUp} {
    padding: 0 ${props => props.theme.gutters.desktop.extraSmall};
  }
`

export const SubSection = styled.section`
  padding: ${props => props.theme.gutters.mobile.small} ${props => props.theme.gutters.mobile.large};

  & h4 {
    font-size: ${props => props.theme.typography.fontSizes.mobile.medium};
    text-decoration: underline;
  }

  & h5 {
    padding-top: ${props => props.theme.gutters.desktop.extraSmall};
    font-size: ${props => props.theme.typography.fontSizes.mobile.small};
  }

  & h6 {
    padding-top: ${props => props.theme.gutters.desktop.extraSmall};
    font-style: italic;
    color: ${props => props.theme.colors.blue};
  }

  ${desktopUp} {
    padding: ${props => props.theme.gutters.desktop.small};

    & h4 {
      font-size: ${props => props.theme.typography.fontSizes.desktop.small};
    }

    & h5 {
      font-size: ${props => props.theme.typography.fontSizes.desktop.small};
    }
  }
`

export const ContactList = styled.ul`
  list-style: none;
  padding: ${props => props.theme.gutters.mobile.small} ${props => props.theme.gutters.mobile.large};

  li {
    margin-bottom: 0.5rem;

    &::before {
      font-family: FontAwesome;
      margin-right: ${props => props.theme.gutters.mobile.small};
    }

    &:nth-child(1) {
      &::before {
        content: '\f0e0'; // email
      }
    }

    &:nth-child(2) {
      &::before {
        content: '\f08c'; // linkedin
      }
    }

    &:nth-child(3) {
      &::before {
        content: '\f092'; // github
      }
    }

    &:nth-child(4) {
      &::before {
        content: '\f3c5'; // location
      }
    }

    ${desktopUp} {
      &::before {
        margin-right: ${props => props.theme.gutters.desktop.small};
      }
    }
  }

  ${desktopUp} {
    padding: ${props => props.theme.gutters.desktop.small}
      ${props => props.theme.gutters.desktop.medium};
  }
`

export const Link = styled.a`
  color: ${props => props.theme.colors.blue};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.darkBlue};
    text-decoration: underline;
  }

  &:active {
    color: ${props => props.theme.colors.blue};
    text-decoration: none;
  }
`

export const SkillsWrapper = styled.div`
  padding: ${props => props.theme.gutters.mobile.medium}
    ${props => props.theme.gutters.mobile.large};

  & section {
    margin-bottom: ${props => props.theme.gutters.mobile.medium};
  }

  ${desktopUp} {
    padding: ${props => props.theme.gutters.desktop.small};

    & section {
      margin-bottom: ${props => props.theme.gutters.desktop.medium};
    }
  }
`

export const SkilssSectionTitle = styled.h4`
  font-weight: ${props => props.theme.typography.fontWeights.bold};
  font-style: italic;
  clear: left;
`

export const SkillsList = styled.ul`
  & li {
    background: ${props => props.theme.colors.lightBlue};
    margin: 0.5rem;
    padding: ${props => props.theme.gutters.mobile.extraSmall};
    text-align: center;
    float: none;
    cursor: context-menu;
    transition: 0.3s;

    &:hover {
      background: ${props => props.theme.colors.blue};
      color: ${props => props.theme.colors.white};
    }

    ${desktopUp} {
      float: left;
      padding: 0.5rem;
      padding: ${props => props.theme.gutters.desktop.extraSmall};
    }
  }
`

export const TasksList = styled.ul`
  list-style: square;
  padding: ${props => props.theme.gutters.mobile.small};
  font-size: ${props => props.theme.typography.fontSizes.mobile.small};

  & li {
    padding: 0.5rem 0;
  }

  ${desktopUp} {
    padding: ${props => props.theme.gutters.desktop.small};
    font-size: ${props => props.theme.typography.fontSizes.desktop.small};
  }
`

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid ${props => props.theme.colors.blue};
  width: 150px;
  height: 150px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

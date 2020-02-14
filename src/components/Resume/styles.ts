import styled from 'styled-components'
import { desktopUp } from '../../styles/BreakPoints'
import profilePicture from '../../images/atrincas.jpeg'

export const Base = styled.div`
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.darkBlue};
  padding: ${props => props.theme.gutters.medium} 0;

  ${desktopUp} {
    max-width: 950px;
    margin: 0 auto;
    box-shadow: 1rem 1rem black;
  }
`

export const HeaderContainer = styled.header`
  margin-bottom: ${props => props.theme.gutters.large};
  text-align: center;

  & h1,
  h2 {
    font-size: ${props => props.theme.typography.fontSizes.large};
    margin: ${props => props.theme.gutters.small} 0;
  }

  & h1 {
    font-size: ${props => props.theme.typography.fontSizes.extraLarge};
    font-weight: ${props => props.theme.typography.fontWeights.bold};

    &::after {
      content: ' ';
      display: block;
      border: 1px solid ${props => props.theme.colors.white};
      margin: ${props => props.theme.gutters.extraSmall};
    }
  }
`

export const SectionHeader = styled.header<{ fullWidth?: boolean }>`
  display: block;
  font-size: ${props => props.theme.typography.fontSizes.large};
  font-style: italic;
  font-weight: ${props => props.theme.typography.fontWeights.bold};
  color: ${props => props.theme.colors.white};
  background-color: #73a5c6;
  padding: ${props => props.theme.gutters.extraSmall};

  ${props => (props.fullWidth ? 'width: auto;' : 'width: 300px;')}

  & h3 {
    display: inline;
  }

  ${desktopUp} {
    width: auto;
  }
`

export const MainSection = styled.section`
  color: ${props => props.theme.colors.darkBlue};
  background-color: #bcd2e8;
  padding-left: ${props => props.theme.gutters.extraLarge};
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
  width: 150px;
  height: 150px;
  background: url(${profilePicture}) center / contain no-repeat;
  border: 2px solid ${props => props.theme.colors.white};
  border-radius: 50%;
`

export const SideSection = styled.section`
  padding-right: ${props => props.theme.gutters.medium};
`

export const SideSubSection = styled.section`
  & h4,
  p {
    padding: ${props => props.theme.gutters.small};
  }

  & h4 {
    font-weight: ${props => props.theme.typography.fontWeights.bold};
  }
`

export const SubSection = styled.section`
  padding: ${props => props.theme.gutters.small};
`

export const ContactList = styled.ul`
  list-style: none;
  padding: ${props => props.theme.gutters.small};

  li {
    margin-bottom: 0.5rem;

    &::before {
      font-family: FontAwesome;
      margin-right: ${props => props.theme.gutters.small};
    }

    &:nth-child(1) {
      &::before {
        content: '\f0e0'; // email icon
      }
    }

    &:nth-child(2) {
      &::before {
        content: '\f08c'; // linkedin icon
      }
    }

    &:nth-child(3) {
      &::before {
        content: '\f3c5'; // location icon
      }
    }
  }
`

export const TasksList = styled.ul`
  list-style: outside;
  margin: ${props => props.theme.gutters.extraSmall} 0;
  padding: 0 ${props => props.theme.gutters.small};
  font-size: ${props => props.theme.typography.fontSizes.small};
`

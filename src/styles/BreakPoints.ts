import styled from 'styled-components'

export const desktopUp = '@media (min-width: 1025px)'

export const desktopDown = '@media (max-width: 1024px)'

export const MobileOnly = styled.div`
  ${desktopUp} {
    display: none;
  }
`

export const DesktopOnly = styled.div`
  ${desktopDown} {
    display: none;
  }
`

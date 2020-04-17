import styled, { css } from 'styled-components'
import { desktopUp } from '../../styles'

const margin = css`
  margin: 0 ${(props) => props.theme.gutters.mobile.extraSmall};

  ${desktopUp} {
    margin: 0 ${(props) => props.theme.gutters.desktop.extraSmall};
  }
`

export const HomeIcon = styled.i.attrs({
  className: 'fas fa-home'
})`
  margin: 0 0.5rem;

  ${desktopUp} {
    margin: 0 ${(props) => props.theme.gutters.desktop.extraSmall};
  }
`

export const AdressCardIcon = styled.i.attrs({
  className: 'fas fa-address-card'
})`
  ${margin}
`

export const ToolboxIcon = styled.i.attrs({
  className: 'fas fa-toolbox'
})`
  ${margin}
`

export const BriefcaseIcon = styled.i.attrs({
  className: 'fas fa-briefcase'
})`
  ${margin}
`

export const GraduationCapIcon = styled.i.attrs({
  className: 'fas fa-graduation-cap'
})`
  ${margin}
`

export const ReactIcon = styled.i.attrs({
  className: 'fab fa-react'
})``

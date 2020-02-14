import styled, { css } from 'styled-components'

const margin = css`
  margin-right: ${props => props.theme.gutters.extraSmall};
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

export const CodeIcon = styled.i.attrs({
  className: 'fas fa-code'
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

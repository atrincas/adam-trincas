import { createGlobalStyle } from 'styled-components'
import { ThemeType } from '../App'

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
body,
div,
h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
img,
ul,
li,
aside,
footer,
header,
section {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

ul {
  list-style: none;
  line-height: 1.25;
}

body {
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  line-height: 1;
  color: ${(props) => props.theme.colors.darkBlue};
  background-color: ${(props) => props.theme.colors.white};
}

h1,
h2,
h3,
h4 {
  font-family: "Asap", sans-serif;
}

#root {
  position: relative;
}
`

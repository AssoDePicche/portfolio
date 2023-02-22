import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

::-webkit-scrollbar {
  display: none;
}

* {
  box-sizing: border-box;
  line-height: ${({ theme }) => theme.typo.spacing.base};
  list-style: none;
  margin: 0;
  outline: none;
  padding: 0;
  text-decoration: none;
  user-select: none;
}

html,
body {
  background-color: ${({ theme }) => theme.colors.neutral.dark};
  color: ${({ theme }) => theme.colors.neutral.light};
  font-family: ${({ theme }) => theme.typo.fontFace.main};
  font-size: 62.5%;
}
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { color, Theme } from "./theme";

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  ${normalize}

  body {
    background-color: #D5E1EF;
    font-family: 'Outfit', sans-serif;
    color: ${color("gray", 900)};
    width: 100%;
  }

  a {
    color: ${color("primary", 700)};
  }
  .attribution { font-size: 11px; text-align: center; }
    .attribution a { color: hsl(228, 45%, 44%); }
`;

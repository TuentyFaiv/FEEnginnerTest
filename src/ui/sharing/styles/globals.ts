import { injectGlobal } from "@emotion/css";

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
injectGlobal`
  * {
    box-sizing: border-box;
    outline: 0;
    padding: 0;
    margin: 0;
    &::before,
    &::after {
      box-sizing: border-box;
    }
  }
  :root {
    --primary-color: #08D9D6;
    --secondary-color: #FF2E63;
    --accent-color: #EAEAEA;
    --success-color: #38A53F;
    --error-color: #E15958;
    --warning-color: #FEB000;
    --primary-font: 'Inter Variable', sans-serif;
    /* --secondary-font: ; */
    --text-white: #FFFFFF;
    --text-black: #000000;

    --bg-color: #16191F;
    --bg-footer: #252A34;

    --size-content: 1280px;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  html {
    color: var(--text-white);
    font-size: 62.5%;
    font-family: var(--primary-font);
    background-color: var(--bg-color);
  }
  body {
    min-height: 100vh;
    font-size: 1.6rem;
  }
  a,
  input,
  select,
  textarea,
  button {
    background-color: transparent;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    border: 0;
  }
  a {
    text-decoration: none;
  }
  a,
  button {
    &:hover {
      cursor: pointer;
      transition: all 0.1s linear;
    }
  }

  #modal-root,
  #loader-root {
    position: absolute;
  }

  #modal-root {
    z-index: 5;
  }
  #loader-root {
    z-index: 10;
  }
`;

export * as layout from "./layout.styles";

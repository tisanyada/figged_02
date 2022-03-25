import { createGlobalStyle } from "styled-components"
import { images } from "./constants"

export const breakpoints = {
    sm: 'screen and (max-width: 480px)',
    md: 'screen and (max-width: 769px)',
    lg: 'screen and (max-width: 1100px)',
}

export const GlobalStyles = createGlobalStyle`
    /* ROOT VARS */
    :root {
        --black01: #313131;
        --black02: #828282;
        --black03: #b6b6b6;
        --black04: #2c3847;
        --black05: #000000;
        
        --orange: #f78430;
        --gray: #eeeeee;
        --yellow: #ffb905;
        --white: #ffffff;
    }


    /* CONFIG */
    body {
        font-family: 'Poppins', sans-serif;
        background-color: #f6f6f6;
        background-image: url(${images.homebg2});
        background-position: top left;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
    }
    li {
        list-style: none;
    }
    html {
        scroll-behavior: smooth;
    }

    h1 {
        font-size: 100px;
        font-weight: 800;
    }
    h2 {
        font-size: 65px;
        font-weight: 600;
    }
    h3 {
        font-size: 60px;
        font-weight: 600;
    }
    h4 {
        font-size: 24px;
        font-weight: 500;
    }
    h5 {
        font-size: 22px;
        font-weight: 500;
    }
    h6 {
        font-size: 20px;
        font-weight: 600;
    }
    p {
        font-size: 16px;
    }
    p.lead {
        font-size: 16px;
        color: var(--black02);
    }
`
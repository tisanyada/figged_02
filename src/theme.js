import { createGlobalStyle } from "styled-components"
import { images } from "./constants"

export const breakpoints = {
    smb: 'screen and (max-width: 400px)',
    mb: 'screen and (max-width: 550px)',
    md: 'screen and (max-width: 880px)',
    xmd: 'screen and (max-width: 910px)',
    lg: 'screen and (max-width: 1100px)',
    xlg: 'screen and (max-width: 1300px)',
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
        background-repeat: no-repeat;
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
        color: var(--black01);
    }
    h2 {
        font-size: 65px;
        font-weight: 600;
        color: var(--black01);
    }
    h3 {
        font-size: 60px;
        font-weight: 600;
        color: var(--black01);
    }
    h4 {
        font-size: 24px;
        font-weight: 500;
        color: var(--black01);
    }
    h5 {
        font-size: 22px;
        font-weight: 500;
        color: var(--black01);
    }
    h6 {
        font-size: 20px;
        font-weight: 600;
        color: var(--black01);
    }
    p {
        font-size: 16px;
    }
    p.lead {
        font-size: 16px;
        color: var(--black02);
    }
`
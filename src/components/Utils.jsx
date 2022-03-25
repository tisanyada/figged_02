import { motion } from "framer-motion"
import styled from "styled-components"
import { images } from "../constants"

import { breakpoints } from "../theme"

export const Wrapper = styled.section`
    padding: 1em 6em;
    background-color: ${(props) => props.bgColor ? `var(--${props.bgColor})` : 'white'};
    ${(props) => props.navbar && (`
        position: sticky;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 999;
        padding: 1.2em 8em;
        // background: url(${images.homebg2});
    `)}
    ${(props) => props.sticky && (`
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
        background-color: white;
    `)};

    @media ${breakpoints.lg} {
        padding: 1em 3.5em;
    }
    @media ${breakpoints.md} {
        padding: 1em 2em;
    }
    @media ${breakpoints.sm} {
        padding: 1em;
    }
`

export const Logo = styled.a`
    font-size: 25px;
    font-weight: 700;
    letter-spacing: -0.06em;
    color: ${(props) => props.color ? props.color : 'var(--black01)'};
`

export const Button = styled(motion.button)`
    outline: none;
    border: none;
    font-size: 16px;
    cursor: pointer;

    font-weight: ${(props)=> props.fw && props.fw};
    padding: ${(props) => props.type === 1 && '19px 48px'};
    padding: ${(props) => props.type === 2 && '17px 48px'};
    padding: ${(props) => props.type === 3 && '27px 52px'};
    padding: ${(props) => props.type === 4 && '17px 26px'};
    padding: ${(props) => props.type === 5 && '14px 54px'};
    color: ${(props) => props.color ? `var(--${props.color})` : 'white'};
    background: ${(props) => props.bg ? `var(--${props.bg})` : 'none'};
    box-shadow: ${(props) => props.shadow === 1 && '0px 30px 30px rgba(99, 122, 166, 0.1)'};
    border-radius: ${(props) => props.radius ? `${props.radius}px` : '10px'};
`
import { motion } from "framer-motion"
import styled from "styled-components"

import { breakpoints } from "../theme"

export const Wrapper = styled.section`
    padding: 1em 6em;
    background-color: ${(props) => props.bgColor ? `var(--${props.bgColor})` : 'none'};
    transition: all .3s ease;

    ${(props) => props.navbar && (`
        position: sticky;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 999;
        padding: 1.2em 6em;
    `)}
    ${(props) => props.sticky && (`
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
        background-color: rgba(255, 255, 255, 0.8);
        // backdrop-filter: blur(2px);
        padding: .5em 6em;
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

    font-weight: ${(props) => props.fw && props.fw};
    padding: ${(props) => props.type === 1 && '19px 48px'};
    padding: ${(props) => props.type === 2 && '17px 48px'};
    padding: ${(props) => props.type === 3 && '27px 52px'};
    padding: ${(props) => props.type === 4 && '17px 26px'};
    padding: ${(props) => props.type === 5 && '14px 54px'};
    color: ${(props) => props.color ? `var(--${props.color})` : 'white'};
    background: ${(props) => props.bg ? `var(--${props.bg})` : 'none'};
    box-shadow: ${(props) => props.shadow === 1 && '0px 30px 30px rgba(99, 122, 166, 0.1)'};
    box-shadow: ${(props) => props.shadow === 2 && '0px 10px 30px -10px rgba(0, 0, 0, 0.5)'};
    border-radius: ${(props) => props.radius ? `${props.radius}px` : '10px'};
    
    ${(props) => props.inputBtn && `
        position: absolute;
        right: 10px;
        top: 30px;
        `}
`

export const ButtonIconed = styled(motion.button)`
    outline: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    font-weight: 800;
    padding: 27px 53px;
    color: rgba(0, 0, 0, 0.4);
    border: 2px solid #DEDEDE;
    display: flex;
    align-items: center;
    justify-content: center;
    /* z-index: 2; */

    img {
        margin-right: 5px;
    }

    background: ${(props) => props.bg ? `
        var(--${props.bg});
        border: none;
    ` : `
        none
    `};
    box-shadow: ${(props) => props.shadow === 1 && '0px 30px 30px rgba(99, 122, 166, 0.1)'};
    box-shadow: ${(props) => props.shadow === 2 && '0px 10px 30px -10px rgba(0, 0, 0, 0.5)'};
    border-radius: ${(props) => props.radius ? `${props.radius}px` : '10px'};
`

export const ClientCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: absolute;
    width: 400px;
    background-color: white;
    border-radius: 10px;
    padding: 10px;

    ${(props) => props.type === 1 && `
        bottom: 80px;
        right: -50px;
    `}

    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 2px solid #DEDEDE;
        margin-right: 10px;
    }

    .text {
        p {
            color: var(--black01);
            margin-bottom: 10px;
        }
        small {
            font-size: 14px;
            font-weight: 500;
            color: var(--black02);
        }
    }
`

export const SectionHeader = styled.div`
    text-align: center;
    margin-top: 100px;

    h2 {
        font-size: 65px;
        font-weight: 600;
        letter-spacing: -0.06em;
        color: var(--black01);
        margin-bottom: 40px;
        position: relative;
        
        &::before {
            position: absolute;
            content: "";
            bottom: 0;
            margin-left: 80px;
            width: 15%;
            text-align: center;
            border-bottom: 2px solid var(--orange);
        }
    }
`
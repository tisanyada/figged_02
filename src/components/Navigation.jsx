import { motion } from "framer-motion"
import styled from "styled-components"
import { images } from "../constants"
import { breakpoints } from "../theme"

export const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`
export const Nav = styled(motion.nav)`
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${breakpoints.lg} {
        position: fixed;
        flex-direction: column;
        top: 0;
        right: -96px;
        height: 100vh;
        /* width: 350px; */
        width: 0;
        background-color: rgba(247, 132, 48, 0.4);
        align-items: flex-start;
        justify-content: flex-start;
        padding: 1em 2em;
        transition: width .8s ease-in-out;
        box-shadow: -30px 0px 40px -10px rgba(247, 132, 48, 0.3);
        backdrop-filter: blur(5px);
        &.active {
            width: 350px;
        }
    }
`
export const NavLink = styled.a`
    margin-right: 30px;
    color: var(--black01);
    font-size: 16px;
    cursor: pointer;
    font-weight: 450;
    transition: 0.3s ease;

    &.active {
        color: var(--black02);
        font-size: 18px;
    }

    @media ${breakpoints.lg} {
        color: white;
        margin-right: 0;
        margin-bottom: 35px;
        &.active {
            color: rgba(255, 255, 255, 0.4);
            font-size: 20px;
        }
    }
`
export const NavCloseButton = styled(motion.button)`
    background: none;
    outline: none;
    border: none;
    display: none;
    cursor: pointer;
    
    svg {
        background: none;
    }

    @media ${breakpoints.lg} {
        display: block;
        color: white;
        margin: 10px 0 40px 145px;
    }
`
export const NavMenuButton = styled(motion.button)`
    background: none;
    outline: none;
    border: none;
    display: none;
    cursor: pointer;

    svg {
        background: none;
    }

    @media ${breakpoints.lg} {
        display: block;
    }
`
export const NavAuthButtons = styled.div`
    display: flex;
    button:nth-child(1){
        margin: 0 40px;
    }

    @media ${breakpoints.lg} {
        flex-direction: column;
        /* width: 100%; */

        border-top: 2px solid white;
        
        button {
            margin: 20px 0;
            &:nth-child(1) {
                margin-top: 20px;
            }
        }
    }
`
export const NavBg = styled(motion.img)`
    position: absolute;
    width: 100%;
    object-fit: cover;
`
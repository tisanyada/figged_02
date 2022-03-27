import styled from "styled-components"
import { breakpoints } from "@/theme"
import { motion } from "framer-motion"


export const HomeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;

    @media ${breakpoints.md} {
        flex-direction: column-reverse;
        height: auto;
    }
`

export const HomeLeftCol = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    h1 {
        letter-spacing: -5px;
        font-weight: 450;
        line-height: 1;

        span{
            font-weight: 800;
            color: var(--orange);
        }
    }

    @media ${breakpoints.lg} {
        h1 {
            font-size: 70px;
            line-height: 1.2;
        }
    }

    @media ${breakpoints.md} {
        margin-top: 40px;
        align-items: center;
        
        h1 {
            text-align: center;
            font-size: 60px;
            letter-spacing: 1.5;
        }
    }
    @media ${breakpoints.mb} {
        h1 {
            font-size: 40px;
            letter-spacing: 0;
        }

        h1, span {
            font-weight: 700;
        }
    }
`

export const HomeRightCol = styled(motion.div)`
    width: 100%;
    position: relative;
    
    img {
        width: 100%;
    }

    @media ${breakpoints.md} {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 80%;
        }
    }
`

export const InputGroup = styled.div`
    position: relative;
    width: 100%;
`

export const SearchInput = styled.input`
    outline: none;
    border: none;
    background: white;
    width: 100%;
    padding: 29px 240px 29px 45px;
    box-shadow: 0px 30px 30px rgba(99, 122, 166, 0.1);
    border-radius: 40px;
    margin: 20px 0;
    font-size: 16px;
    font-weight: 600;
    color: var(--black01);

    &::placeholder {
        font-size: 16px;
        text-transform: uppercase;
        color: var(--black02);
        font-weight: 600;
    }

    @media ${breakpoints.xlg} {
        padding-right: 150px;
    }
    @media ${breakpoints.mb} {
        padding-right: 120px;
        padding-left: 20px;
    }
`

export const ButtonGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 75%;
    gap: 15px;
    margin: 20px auto 0;

    @media ${breakpoints.lg} {
        margin-left: 0;
    }
    @media ${breakpoints.md} {
        width: 100%;
        margin: 20px auto;

        button {
            margin: 0 auto;
        }
    }
    @media ${breakpoints.mb} {
        grid-template-columns: 1fr;
        width: 80%;
        margin-top: 40px;
    }
    @media ${breakpoints.smb} {
        margin-top: 40px;
    }
`


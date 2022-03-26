import styled from "styled-components"
import { breakpoints } from "@/theme"


export const FooterContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    gap: 5rem;
    margin-top: 100px;

    @media ${breakpoints.md} {
        gap: 2em;
        grid-template-columns: repeat(3, 1fr);
    }
    @media ${breakpoints.mb} {
        gap: 2em;
        grid-template-columns: repeat(2, 1fr);
    }
`

export const FooterCol = styled.div`
    margin: 0 0 20px;
    display: flex;
    flex-direction: column;
    
    h5 {
        margin-bottom: 20px;
    }

    a.link {
        color: var(--black02);
    }

    p.lead {
        margin: 20px 0;
    }
    .socials {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 10px;
        
        .icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            border: 1px solid var(--black01);
            cursor: pointer;
            transition: .5s ease;
            
            &.active {
                background: var(--black01);
                svg {
                    transition: .8s ease;
                    color: var(--white);
                }
            }
        }
    }

    @media ${breakpoints.md} {
        margin-bottom: 5px;
    }
    @media ${breakpoints.mb} {
        .socials {
            justify-content: space-between;
        }
    }
`

export const Copyright = styled.div`
    padding: 10px;
    width: 100%;
    text-align: center;
    color: var(--white);
    background: var(--orange);
    font-size: 14px;
    font-weight: 500;
`
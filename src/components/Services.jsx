import styled from "styled-components"
import { breakpoints } from "@/theme"

export const ServicesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    row-gap: 40px;
    column-gap: 30px;
    padding: 80px;

    @media ${breakpoints.mb} {
        column-gap: 0;
        padding: 20px;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
`
export const Serviceitem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: #FAFAFA;
    padding: 10px;
    height: 300px;
    border-radius: 8px;
    border: 1px solid rgba(239, 239, 239, 0.6);    
    transition: all .5s ease;

    &:hover {
        box-shadow: 0px 30px 30px rgba(99, 122, 166, 0.1);
        background-color: white;
        z-index: 2;
    }

    h6 {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 20px;
        color: var(--black01);
        margin: 30px auto;
    }
    
    p{
        font-size: 14px;
        color: var(--black02);
        
    }

    @media ${breakpoints.mb} {
        margin: 0 auto;
    }
`
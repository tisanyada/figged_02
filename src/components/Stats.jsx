import styled from "styled-components"
import { breakpoints } from "@/theme"


export const StatsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: start;
    column-gap: 100px;
    margin-top: 50px;

    @media ${breakpoints.md} {
        flex-direction: column;
    }
`

export const StatsLeftCol = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    /* flex-direction: column; */

    .item {
        width: 40%;
        margin: 40px auto;
        position: relative;

       &::before {
            position: absolute;
            content: "";
            left: -5px;
            height: 100%;
            width: 5px;
            margin-left: -5px;
            background: var(--orange);
       }
    }
    .item:nth-child(2), .item:nth-child(4){
       margin-left: 60px;
    }

    @media ${breakpoints.lg} {
        .item {
            width: 30%;
        }  
        .item::before {
            width: 3px;
            left: -5px;
        }
        h3 {
            font-size: 30px;
        }
    }

    @media ${breakpoints.md} {
        width: 100%;
    }
`

export const StatsRightCol = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    position: relative;
    
    img.main {
        width: 80%;
        box-shadow: 100px 100px 0px -60px var(--orange);
    }

    @media ${breakpoints.lg} {
        img.main {
            box-shadow: 50px 50px 0px -10px var(--orange);
        }
    }
    
    @media ${breakpoints.md} {
        width: 100%;
        align-items: center;
        margin-top: 50px;

        img.main {
            border: none;
            width: 85%;
            box-shadow: -30px -20px 0px 10px var(--orange);
        }
    }
`
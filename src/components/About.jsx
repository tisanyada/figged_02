import styled from "styled-components"
import { breakpoints } from "@/theme"

export const AboutContainer = styled.div`
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

export const AboutLeftCol = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    background-color: #fafafa;
    border-radius: 10px;

    .process{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px auto;
        
        .avatar {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 60px;
            height: 60px;
            background: var(--gray);
            border-radius: 50%;
            margin: 20px auto;
        }

        h4{
            font-weight: 600;
            letter-spacing: -1.5px;
            position: relative;

            &:hover::before {
                position: absolute;
                content: "";
                bottom: 0;
                margin-left: 40px;
                width: 35%;
                text-align: center;
                border-bottom: 2px solid var(--orange);
            }
        }
    }

    @media ${breakpoints.lg} {
        .process h4 {
            font-size: 20px;
        } 
    }

    @media ${breakpoints.md} {
        width: 100%;
        flex-direction: row;
        
        .process {
            margin-top: 0;
            
            h4 {
                font-size: 16px;
                font-weight: 500;
                letter-spacing: -1px;
            }
        }
    }
    @media ${breakpoints.mb} {
        display: grid;
        grid-template-columns: 1fr 1fr;
        .process {
            margin: 20px;
        }
        .process h4 {
            text-align: center;
            font-size: 18px;
        }
    }
`

export const AboutRightCol = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;


    h4 {
        font-size: 26px;
        font-weight: 700;
    }

    p {
        margin: 30px auto;
        line-height: 2;
    }

    #buttons {
        margin-top: 100px;
    }

    @media ${breakpoints.md} {
        flex-direction: column;
        width: 100%;
        margin-top: 40px;

        h4 {
            text-align: center;
        }

        #buttons {
            margin-top: 50px;
        }
    }
`
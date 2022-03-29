import styled from "styled-components"
import { breakpoints } from '@/theme'
import { motion } from "framer-motion"


export const TestimonialContainer = styled.div`
    width: 100%;
    margin-top: 150px;
    height: 350px;
    background: var(--orange);
    position: relative;

    @media ${breakpoints.md} {
        weight: 50%;
        background: rgba(255, 255, 255, 0);
    }
`

export const TestimonialItem = styled(motion.div)`
    position: absolute;
    left: 0;
    top: -100px;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    width: 800px;
    margin: 0 auto;
    border-radius: 10px;
    text-align: center;
    padding: 10px;

    h6 {
        font-size: 16px;
    }
    p.lead {
        margin: 30px auto;
    }
    .stars {
        color: #ffb905;
    }


    @media ${breakpoints.xlg} {
        width: 700px;
        padding: 20px 100px;
    }
    @media ${breakpoints.md} {
        width: 500px;
        padding: 10px 20px;

        h6 {
            font-size: 18px;
        }
        p, h4{
            font-size: 14px;
        }
        p.lead{
            font-size: 14px;
            margin: 10px auto;
        }
    }
    @media ${breakpoints.mb} {
        width: 300px;

        p.lead {
            line-height: 1.6;
        }
    }
`

export const SlideButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 40px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 10%;
    
    .radio {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: white;
        cursor: pointer;
    }
    .radio.active {
        background: rgba(255, 255, 255, 0.2);
        border: 2px solid white;
    }

    @media ${breakpoints.xlg} {
        margin: 0;
        top: 80px;
        left: 60px;
        height: 30%;
        flex-direction: column;

        .radio {
            background-color: var(--white);
            width: 20px;
            height: 20px;
        }
        .radio.active {
            border: 2px solid var(--white);
        }
    }
    @media ${breakpoints.lg} {
        left: 10px;
    }
    @media ${breakpoints.md} {
        bottom: 80px;
        left: -40px;
        width: 20%;
        
        .radio {
            background-color: var(--orange);
            width: 20px;
            height: 20px;
        }
        .radio.active {
            border: 2px solid var(--orange);
        }
    }
    @media ${breakpoints.xmd} {
        margin: 180px auto 0;
        flex-direction: row;
         
        .radio {
            background-color: var(--orange);
            width: 20px;
            height: 20px;
        }
        .radio.active {
            border: 2px solid var(--orange);
        }
        bottom: -60px;
    }
    @media ${breakpoints.mb} {
        margin: 280px auto;
        left: 0;
        width: 30%;
    }
`
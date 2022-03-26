import { motion } from "framer-motion"
import styled from "styled-components"
import { breakpoints } from "@/theme"

export const BlogContainer = styled.div`
    width: 80%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px auto 0;
    gap: 20px;

    @media ${breakpoints.xmd} {
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
    }
    @media ${breakpoints.mb} {
        width: 100%;
    }
`

export const BlogItem = styled(motion.div)`
    width: 50%;
    position: relative;
    
    img {
        width: 100%;
    }
    
    @media ${breakpoints.xmd} {
        width: 80%;
    }
    @media ${breakpoints.mb} {
        width: 100%;
        margin-bottom: 20px;
    }
`
export const BlogItemTag = styled(motion.p)`
    position: absolute;
    top: 0;
    right: 20px;

    font-size: 16px;
    font-weight: 600;
    padding: 20px;
    background: var(--white);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`

export const BlogItemContent = styled(motion.div)`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 25px;

    margin: 0 auto;
    width: 420px;
    height: 230px;
    padding: 10px;
    background: var(--white);
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(2px);
    border-radius: 10px;

    p.lead{
        margin: 5px auto;
    }

    @media ${breakpoints.xmd} {
        bottom: 20px;
        width: 450px !important;
        height: 180px;
    }
    @media ${breakpoints.md} {
        width: 80% !important;
        padding: 10px 15px;
        
        h4 {
            font-size: 16px !important;
        }
        
        p.lead {
            margin: 0;
            font-size: 12px;
        }
        
    }
    @media ${breakpoints.mb} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        height: 180px;
        width: 95% !important;
        h4 {
            font-size: 14px !important;
        }
        
        p.lead {
            margin: 10px auto;
            font-size: 8px;
        }
    }
    @media screen and (max-width: 1300px) {
        width: 300px;

        h4 {
            font-size: 20px;
        }

        p.lead {
            font-size: 14px;
        }
    }
`
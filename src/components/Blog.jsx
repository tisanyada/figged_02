import { motion } from "framer-motion"
import styled from "styled-components"


export const BlogContainer = styled.div`
    width: 80%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px auto 0;
    gap: 20px;
`

export const BlogItem = styled(motion.div)`
    width: 50%;
    position: relative;

    img {
        width: 100%;
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
`
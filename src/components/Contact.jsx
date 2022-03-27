import styled from "styled-components"
import { breakpoints } from "@/theme";
import { motion } from "framer-motion";


export const ContactContainer = styled(motion.div)`
    width: 85%;
    background-color: var(--orange);
    margin: 100px auto 0;
    text-align: center;
    padding: 20px 200px;
    
    h4 {
        font-size: 48px;
        font-weight: 600;
        color: var(--white);
    }
    p.lead {
        color: var(--white);
        margin: 20px auto;
    }

    @media screen and (max-width: 1300px){
        width: 100%;
        padding: 20px 50px;
    }
    @media ${breakpoints.mb} {
        padding: 20px;
    }
`
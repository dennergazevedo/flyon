import styled from "styled-components";
import { motion } from "framer-motion";

// 13A5DE
// 121212

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 100vw;
    width: 100vw;
    height: 120px;
    background-color: transparent;
    color: #FFF;
    padding: 10px;
    padding-left: 20%;
    padding-right: 20%;
`;

export const Logomarca = styled(motion.img)`
    display: flex;
    width: auto;
    opacity: 0;
    height: 40px;

    @media only screen and (max-width: 1200px){
        width: 30vw;
        height: auto;
    }
`;

export const Left = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Right = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
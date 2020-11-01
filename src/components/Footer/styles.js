import styled from "styled-components";
import { motion } from "framer-motion";

// 13A5DE
// 121212

export const Footer = styled(motion.footer)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    max-width: 100vw;
    width: 100%;
    height: auto;
    padding: 50px;
    background-color: #000;
    color: #FFF;
    padding-left: 20%;
    padding-right: 20%;
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

export const Logomarca  = styled(motion.img)`
    display: flex;
    width: auto;
    height: 100px;
`;
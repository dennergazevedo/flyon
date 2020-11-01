import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 100vw;
    min-height: 100vh;
    height: auto;
    background-color: #121212;
    color: #FFF;
`;

export const Body = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60vw;
    height: auto;
    margin-top: 50px;
    justify-content: flex-start;
`;

export const Title = styled(motion.span)`
    display: flex;
    flex-direction: row;
    width: 70%;
    min-width: 350px;
    text-align: center;
    font-size: 70px;
    font-weight: 600;

    @media only screen and (max-width: 600px){
        font-size: 50px;
    }

    b{
        color: #13A5DE;
    }
`;

export const Subtitle = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;
    width: 60%;
    height: auto;
    padding: 5px;
`;

export const Citacao = styled(motion.span)`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: right;
    font-size: 14px;
    width: 45%;
    line-height: 24px;
`;
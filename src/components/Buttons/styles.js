import styled from "styled-components";
import { motion } from "framer-motion";

// 13A5DE
// 121212
// 0084AD

export const ButtonSimple = styled(motion.button)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 40px;
    font-size: 12px;
    font-weight: 600;
    background-color: #13A5DE;
    color: #121212;
    border-radius: 5px;
    transition: 0.3s all;
    opacity: 0;

    &:hover{
        transition: 0.3s all;
        background-color: #0084AD;
    }
`;

export const ButtonSocial = styled(motion.button)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: #121212;
    margin: 10px;
    border-radius: 5px;
    font-size: 24px;
    color: #13A5DE;
    transition: 0.2s all;

    &:hover{
        transition: 0.2s all;
        background-color: #222;
        font-size: 26px;
    }
`;

export const ButtonJoin = styled(motion.button)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;
    min-width: 250px;
    height: 70px;
    font-size: 14px;
    font-weight: 600;
    background-color: #13A5DE;
    color: #121212;
    border-radius: 5px;
    transition: 0.3s all;
    color: #FFF;

    &:hover{
        transition: 0.3s all;
        background-color: #0084AD;
    }
`;
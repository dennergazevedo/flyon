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
    opacity: 0;

    @media only screen and (max-width: 1170px){
        margin-top: 20px;
    }

    &:hover{
        transition: 0.3s all;
        background-color: #0084AD;
    }
`;

export const ButtonMore = styled(motion.button)`
    display: flex;
    background-color: transparent;
    color: #222;
    position: absolute;
    font-size: 10px;
    margin-top: 435px;
    font-weight: 500;
    transition: 0.5s all;

    &:hover{
        transition: 0.5s all;
        color: #FFF;
        font-weight: 400;
    }
`;

export const ButtonSend = styled(motion.button)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 40px;
    font-size: 12px;
    font-weight: 600;
    background-color: #13A5DE;
    color: #FFF;
    border-radius: 5px;
    transition: 0.3s all;
    margin-top: 20px;
    align-self: center;

    .iconButton{
        font-size: 18px;
        margin-right: 10px;
    }

    &:hover{
        transition: 0.3s all;
        background-color: #0084AD;
    }
`;

export const ButtonCloseModal = styled(motion.button)`
    display: flex;
    width: 40px;
    height: 40px;
    font-size: 24px;
    color: #121212;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: transparent;
    transition: 0.5s all;
    align-self: flex-end;

    &:hover{
        transition: 0.5s all;
        background-color: #3331;
    }
`;
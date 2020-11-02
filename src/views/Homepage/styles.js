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

    @media only screen and (max-width: 600px){
        width: 90vw;
    }
`;

export const Title = styled(motion.span)`
    display: flex;
    flex-direction: row;
    width: 70%;
    min-width: 350px;
    text-align: center;
    font-size: 70px;
    font-weight: 600;
    opacity: 0.1;

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
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 100px;
    width: 60%;
    height: auto;
    padding: 5px;

    @media only screen and (max-width: 600px){
        width: 100%;
        flex-direction: column;
    }
`;

export const Citacao = styled(motion.span)`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: right;
    font-size: 14px;
    width: 45%;
    line-height: 24px;
    min-width: 300px;

    @media only screen and (max-width: 600px){
        margin-bottom: 30px;
    }
`;

export const Website = styled(motion.img)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    @media only screen and (max-width: 600px){
        margin-top: 50px;
    }
`;

export const Responsive = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: auto;
    padding: 20px;
    height: 80px;
    border-radius: 5px;
    background-color: #333;
    margin-top: -50px;
    font-size: 12px;
    font-weight: 500;
    transition: 0.5s all;
    cursor: pointer;

    &:hover{
        padding-left: 30px;
        padding-right: 30px;
        transition: 0.5s all;
    }
    
    @media only screen and (max-width: 600px){
        margin-top: -20;
    }
`;

export const Icon = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: 2px dotted #444;
    margin-right: 30px;
    font-size: 20px;
    color: #FFF;

    @media only screen and (max-width: 600px){
        margin-right: 10px;
    }
`;

export const ItemResponsive = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    margin-left: 30px;

    b{
        color: #13A5DE;
        font-size: 16px;
    }

    @media only screen and (max-width: 600px){
        font-size: 12px;
        margin-left: 10px;
    }
`;

export const Clients = styled(motion.div)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 100%;
    margin-top: 50px;
`;

export const ItemClients = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: 50px;
    width: 40%;
    min-width: 300px;
    margin: 20px;

    img{
        height: auto;
        width: 100%;
    }

    h1{
        font-size: 50px;

        @media only screen and (max-width: 600px){
            font-size: 40px;
        }
    }

    span{
        margin-top: 20px;
    }
`;

export const Line = styled(motion.div)`
    display: flex;
    background-color: #13A5DE;
    height: 5px;
    width: 50px;
    margin-bottom: 20px;
`;
import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    background-color: #FFF;
    border-radius: 10px;
    width: 50vw;
    max-width: 700px;
    min-width: 300px;
    min-height: 300px;
    z-index: 40;
`;

export const TitleModal = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 16px;
    font-weight: 600;
    color: #121212;
    margin-top: -30px;
    margin-left: 10px;
    align-self: flex-start;

    .iconTitle{
        font-size: 20px;
        margin-right: 10px;
    }
`;
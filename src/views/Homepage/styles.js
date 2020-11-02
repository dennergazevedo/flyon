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
    width: 70vw;
    height: auto;
    margin-top: 50px;
    justify-content: flex-start;

    .divWebsite{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        @media only screen and (max-width: 1000px){
            flex-direction: column;
        }

        #responsive{
            @media only screen and (max-width: 1000px){
                margin-top: 10px;
            }
        }
    }

    @media only screen and (max-width: 850px){
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

    @media only screen and (max-width: 1170px){
        width: 90%;
        
    }

    @media only screen and (max-width: 720px){
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
    z-index: 1;

    @media only screen and (max-width: 1560px){
        width: 80%;
    }

    @media only screen and (max-width: 1170px){
        width: 80%;
        flex-direction: column;
    }

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

    @media only screen and (max-width: 1170px){
        text-align: center;
    }

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
    z-index: 0;

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
    margin-top: -70px;
    font-size: 12px;
    font-weight: 500;
    transition: 0.5s all;
    cursor: pointer;
    opacity: 0;
    margin-left: 10px;
    margin-right: 10px;
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
    margin-top: 120px;
`;

export const ItemClients = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: 50px;
    width: 30vw;
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

export const Store = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    margin-top: 120px;
`;

export const ItemStore = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    text-align: end;
    min-height: 50px;
    width: 50vw;
    min-width: 300px;
    margin: 20px;
    margin-left: 60px;

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

export const ListItem = styled(motion.div)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 50px;

    @media only screen and (max-width: 700px){
        flex-direction: column;
        justify-content: center;
    }
`;

export const Divider = styled(motion.hr)`
    width: 100%;
    border-top: 1px solid #3337;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const Product = styled(motion.div)`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    width: 15vw;
    min-width: 300px;
    height: 450px;
    background-color: #222;
    box-shadow: 10px 25px 0px 0px #13A5DE;
    margin-bottom: 20px;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
    margin-top: 20px;
    margin-left: -30px;
    opacity: 0;

    .bodyTitle{
        display: flex;
        font-size: 34px;
        width: 100%;
        color: #FFF;
        font-weight: 800;
    }

    .bodySubtitle{
        display: flex;
        font-size: 26px;
        width: 100%;
        color: #13A5DE;
        font-weight: 600;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    .bodyDescribe{
        display: flex;
        font-size: 14px;
        line-height: 26px;
        font-weight: 400;
    }

    .title{
        display: flex;
        flex-direction: row;
        padding: 10px;
        width: 100%;
        height: auto;
        align-items: center;
        justify-content: space-between;

        button{
            background-color: #333;
            color: #FFF;
            border-radius: 5px;
            height: auto;
            padding: 5px;
            padding-left: 20px;
            padding-right: 20px;
            font-size: 10px;
            font-weight: 600;
            transition: 0.5s all;

            &:hover{
                transition: 0.5s all;
                background-color: #444;
            }
        }

        span{
            font-size: 14px;
            color: #909090;
            font-weight: 600;
        }
    }
`;

export const Contact = styled(motion.div)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 100px;
    background-color: #222;
    width: 100%;
    min-width: 300px;
    height: auto;
    padding: 20px;
    margin-bottom: -100px;
    z-index: 1;
    border-radius: 5px;
    justify-content: space-between;

    @media only screen and (max-width: 1300px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (max-width: 800px){
        margin-bottom: -50px;
    }
`;

export const Left = styled(motion.div)`
    display: flex;
    flex-direction: column;
    background-color: #222;
    width: 45%;
    height: auto;
    padding: 20px;
    margin-left: 10px;
    opacity: 0;

    @media only screen and (max-width: 1300px){
        width: 100%;
    }
`;

export const Right = styled(motion.div)`
    display: flex;
    flex-direction: column;
    border: 1px solid #333;
    border-radius: 5px;
    width: 50%;
    height: auto;
    padding: 20px;
    min-width: 250px;
    margin-right: 10px;
    opacity: 0;

    @media only screen and (max-width: 1300px){
        width: 100%;
    }

    .rightItem{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;

        @media only screen and (max-width: 600px){
            flex-direction: column;
        }

        .divInputForm{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            align-items: center;
            border: 1px solid #121212;
            height: 40px;
            width: 48%;
            border-radius: 5px;
            background-color: #121212;
            margin-top: 10px;
            min-width: 200px;

                @media only screen and (max-width: 600px){
                width: 100%;
            }

            &:hover{
                border: 1px solid #13A5DE;
            }

            button{
                height: 40px;
                width: 45px;
                background-color: transparent;
                color: #13A5DE;
                font-size: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            input{
                height: 40px;
                background-color: transparent;
                color: #F2F2F2;
                font-size: 12px;
                width: 100%;

                &:focus{
                    color: #FFF;
                }
            }
        }
    }

    textarea{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            align-items: center;
            border: 1px solid #121212;
            height: 80px;
            width: 100%;
            margin-top: 10px;
            min-width: 200px;
            border-radius: 5px;
            background-color: #121212;
            padding: 5px 5px 5px 10px;
            color: #FFF;

            &:hover{
                border: 1px solid #13A5DE;
            }

            button{
                height: 40px;
                width: 45px;
                background-color: transparent;
                color: #13A5DE;
                font-size: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            textarea{
                height: 80px;
                background-color: transparent;
                color: #F2F2F2;
                font-size: 12px;
                width: 100%;

                &:focus{
                    color: #FFF;
                }
            }
        }
`;

export const TitleContact = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: #FFF;

    .iconContact{
        font-size: 36px;
        margin-right: 20px;
        color: #13A5DE;
    }

    span{
        font-size: 32px;
        font-weight: 600;
        b{
            color: #13A5DE;
        }
    }
`;

export const SubtitleContact = styled(motion.span)`
    display: flex;
    flex-direction: column;
    font-size: 16px;
    margin-top: 70px;

    b{
        margin: 20px;
        margin-top: 40px;
        margin-bottom: 10px;
        color: #13A5DE;
        
        @media only screen and (max-width: 600px){
            text-align: center;
        }
    }

    i{
        font-size: 10px;
        color: #909090;
        margin-top: 10px;
    }
`;
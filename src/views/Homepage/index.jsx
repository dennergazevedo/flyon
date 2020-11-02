/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';

// STYLED COMPONENTS
import {
    Container,
    Body,
    Title,
    Subtitle,
    Citacao,
    Website,
    Responsive,
    Icon,
    ItemResponsive,
    Clients,
    ItemClients,
    Line,
    Store,
    ItemStore,
    ListItem,
    Product,
    Divider,
    Contact,
    Left,
    Right,
    TitleContact,
    SubtitleContact,
} from './styles.js';

import {
    ModalContainer,
    TitleModal
} from './Modal/styles.js';

// BUTTON
import {
    ButtonJoin,
    ButtonMore,
    ButtonSend,
    ButtonCloseModal
} from '../../components/Buttons/styles.js';


// COMPONENTS
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import InputMask from 'react-input-mask';
import Modal from './Modal';

// ASSETS
import website from '../../assets/img/website.png';
import clients from '../../assets/img/clients.png';

// ICONS
import {
    FaCompressAlt,
    FaTags,
    FaComments,
    FaEnvelope,
    FaUser,
    FaGem,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaTimes,
    FaBullhorn
} from 'react-icons/fa';

export default function Homepage() {

    const [productModal, setProductModal] = useState(false);

    const toggleProduct = () => setProductModal(!productModal);

    return (
        <Container>
            <Navbar />
            <Body>
                <Title 
                    animate={{ y: 15, opacity: 1 }}
                    transition={{ ease: 'easeOut', duration: 1 }}>
                        <span>
                        Sua empresa dentro dos negócios<b>.</b>
                        </span>
                </Title>
                <Subtitle>
                    <Citacao 
                        animate={{ x: -10, opacity: 1 }}
                        transition={{ ease: 'easeOut', duration: 1 }}>
                        <span>
                            "Vão existir <b>dois tipos de empresas</b>: as que fazem negócios pela <b>internet</b> e as que estão fora dos <b>negócios</b>." 
                            <i>- Bill Gates</i>
                        </span>
                    </Citacao>
                    <ButtonJoin
                        animate={{ opacity: 1 }}
                        transition={{ ease: 'easeOut', duration: 0.8 }}>
                            ENTRAR NOS NEGÓCIOS
                    </ButtonJoin>
                </Subtitle>

                <Website 
                    src={website} 
                    alt="WEBSITE" 
                    animate={{ y: -50, opacity: 1 }}
                    transition={{ ease: 'easeOut', duration: 1 }}/>
                    
                <div className="divWebsite">
                    <Responsive 
                        animate={{ y: 20, opacity: 1 }}
                        transition={{ ease: 'easeOut', duration: 0.5 }}>
                        <Icon>
                            <FaTags />
                        </Icon>
                        <ItemResponsive>
                            <span>
                                <b>VENDA ONLINE</b>
                            </span>
                            <span>
                                Receba online, rápido e seguro.
                            </span>
                        </ItemResponsive>
                    </Responsive>

                    <Responsive
                        id="responsive"
                        animate={{ y: 20, opacity: 1 }}
                        transition={{ ease: 'easeOut', duration: 0.5 }}>
                        <Icon>
                            <FaCompressAlt />
                        </Icon>
                        <ItemResponsive>
                            <span>
                                <b>100% RESPONSIVO</b>
                            </span>
                            <span>
                                Ajusta em qualquer aparelho.
                            </span>
                        </ItemResponsive>
                    </Responsive>
                </div>

                <Clients>
                    <ItemClients 
                        animate={{ x: -20, opacity: 1 }}
                        transition={{ ease: 'easeOut', duration: 1 }}>
                        <Line/>
                        <h1>Conquiste novos clientes e seja reconhecido.</h1>
                        <span>Uma nova jornada próspera com o suporte que precisa.</span>
                    </ItemClients>

                    <ItemClients
                        animate={{ x: 20, opacity: 1 }}
                        transition={{ ease: 'easeOut', duration: 1 }}>
                        <img src={clients} alt="CLIENTES" />
                    </ItemClients>
                </Clients>

                <Store>
                    <ItemStore 
                        animate={{ x: 20, opacity: 1 }}
                        transition={{ ease: 'easeOut', duration: 1 }}>
                        <Line/>
                        <h1>Conheça nossos produtos</h1>
                        <span>Escolha a opção que melhor descreve sua necessidade.</span>
                    </ItemStore>
                    <ListItem>

                        
                    <Product 
                        animate={{ x: 20, opacity: 1 }}
                        transition={{ ease: 'easeOut', duration: 0.8 }}>
                        <div className="title">
                            <button>STATIC</button>
                            <span>01</span>
                        </div>
                        <Divider/>
                        <span className="bodyTitle">
                            Site Estático
                        </span>
                        <span className="bodySubtitle">
                            Informe aos seus clientes
                        </span>
                        <span className="bodyDescribe">
                            Site informativo, construído em tecnologia de ponta, para melhor experiência de seus clientes.
                        </span>
                        <ButtonMore onClick={toggleProduct}>SAIBA MAIS...</ButtonMore>
                    </Product>
                            
                    <Modal isToggled={productModal} toggle={toggleProduct}>
                        <ModalContainer>
                            <ButtonCloseModal onClick={toggleProduct}>
                                <FaTimes/>
                            </ButtonCloseModal>
                            <TitleModal>
                                <FaBullhorn className="iconTitle"/>
                                <span>STATIC</span>
                            </TitleModal>
                        </ModalContainer>
                    </Modal>

                        <Product 
                            animate={{ x: 20, opacity: 1 }}
                            transition={{ ease: 'easeOut', duration: 1.6 }}>
                            <div className="title">
                                <button>E-COMMERCE</button>
                                <span>02</span>
                            </div>
                            <Divider/>
                            <span className="bodyTitle">
                                Venda Online
                            </span>
                            <span className="bodySubtitle">
                                Venda e receba 100% online
                            </span>
                            <span className="bodyDescribe">
                                Site com SSL, plataformas de pagamento, criptografia e constrído com tecnologia de ponta.
                            </span>
                            <ButtonMore>SAIBA MAIS...</ButtonMore>
                        </Product>

                        <Product
                            animate={{ x: 20, opacity: 1 }}
                            transition={{ ease: 'easeOut', duration: 2.4 }}>
                            <div className="title">
                                <button>APPLICATION</button>
                                <span>03</span>
                            </div>
                            <Divider/>
                            <span className="bodyTitle">
                                Controle
                            </span>
                            <span className="bodySubtitle">
                                Sistema de controle completo.
                            </span>
                            <span className="bodyDescribe">
                                Controle seu estoque, suas vendas e seus gastos de forma muito mais prática.
                            </span>
                            <ButtonMore>SAIBA MAIS...</ButtonMore>
                        </Product>
                    </ListItem>
                </Store>

                <Contact>
                    <Left 
                        animate={{ x: -10, opacity: 1 }}
                        transition={{ ease: 'easeOut', duration: 1 }}>
                        <TitleContact>
                            <FaComments className="iconContact"/>
                            <span>FALE CONOSCO<b>.</b></span>
                        </TitleContact>
                        <SubtitleContact>
                            Envie uma mensagem para nosso antedimento virtual, estamos ansiosos para saber todas suas ideias e como está disposto
                            à colocar ela na prática! 
                            <i>*Dentro de até 1 dia útil nossa equipe entrará em contato.</i>
                            <b>Seja digital você também.</b>
                        </SubtitleContact>
                    </Left>
                    <Right 
                        animate={{ x: 10, opacity: 1 }}
                        transition={{ ease: 'easeOut', duration: 1 }}>
                        <div className="rightItem">
                            <div className="divInputForm">
                                <button><FaEnvelope/></button>
                                <input placeholder="email@exemplo.com"/>
                            </div>

                            <div className="divInputForm">
                                <button><FaUser/></button>
                                <input placeholder="Nome Completo"/>
                            </div>
                        </div>

                        <div className="rightItem">
                            <div className="divInputForm">
                                <button><FaGem/></button>
                                <input placeholder="Produto"/>
                            </div>

                            <div className="divInputForm">
                                <button><FaPhoneAlt/></button>
                                <InputMask
                                    mask="(99)9 9999-9999"
                                    placeholder="(99)9 9999-9999"
                                />
                            </div>
                        </div>

                        <div className="rightItem">
                            <div className="divInputForm">
                                <button><FaComments/></button>
                                <input placeholder="Assunto"/>
                            </div>

                            <div className="divInputForm">
                                <button><FaMapMarkerAlt/></button>
                                <input placeholder="Cidade de atuação"/>
                            </div>
                        </div>

                        <textarea placeholder="Escreva uma mensagem..."/>
                        <ButtonSend>ENVIAR</ButtonSend>
                    </Right>
                </Contact>
            </Body>
            <Footer />
        </Container>
    )
}

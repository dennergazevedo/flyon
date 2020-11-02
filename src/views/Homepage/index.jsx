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
    TitleModal,
    ModalBody
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
    FaBullhorn,
    FaDollarSign,
    FaHeadset,
    FaShoppingCart,
    FaProjectDiagram
} from 'react-icons/fa';

// SERVICES
import api from '../../services/api';
import { toast } from 'react-toastify';
import validator from 'validator';

export default function Homepage() {

    const [productModal, setProductModal] = useState(false);
    const [salesModal, setSalesModal] = useState(false);
    const [systemModal, setSystemModal] = useState(false);
    const [subject, setSubject] = useState('');
    const [product, setProduct] = useState('');
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [phone, setPhone] = useState('');
    const [cidade, setCidade] = useState('');
    const [mensagem, setMensagem] = useState('');

    const toggleProduct = () => setProductModal(!productModal);
    const toggleSales = () => setSalesModal(!salesModal);
    const toggleSystem = () => setSystemModal(!systemModal);

    function handleConsultProduct(){
        setProductModal(false);
        setSalesModal(false);
        setSystemModal(false);
        setProduct('STATIC');
        setSubject('Desejo saber mais...')
        window.location.href='/#contact';
    }

    function handleConsultSales(){
        setProductModal(false);
        setSalesModal(false);
        setSystemModal(false);
        setProduct('E-COMMERCE');
        setSubject('Desejo saber mais...');
        window.location.href='/#contact';
    }

    function handleConsultSystem(){
        setProductModal(false);
        setSalesModal(false);
        setSystemModal(false);
        setProduct('APPLICATION');
        setSubject('Desejo saber mais...')
        window.location.href='/#contact';
    }

    function handleOpenProduct(){
        setSalesModal(false);
        toggleProduct();
    }

    function handleOpenSales(){
        setProductModal(false);
        toggleSales();
    }

    function handleOpenSystem(){
        setSystemModal(false);
        toggleSystem();
    }

    function handleEntry(){
        setProductModal(false);
        setSalesModal(false);
        setSystemModal(false);
        setSubject('Eu quero entrar nos negócios online.');
        window.location.href='/#contact';
    }

    async function handleMail(){
        if(validator.isEmail(email)){
            try{
                await api.post('/contact',{
                    email,
                    nome,
                    produto: product,
                    phone,
                    assunto: subject,
                    cidade,
                    mensagem,
                });
                toast.success('Sucesso! Em breve nossa equipe entrará em contato.', { position: 'bottom-center' });
            }catch(err){
                toast.error('Falha na tentativa de contato, verifique os dados e tente novamente!', { position: 'bottom-center' });
            }
        }else{
            toast.error('Digite um e-mail válido!', { position: 'bottom-center' });
        }
    }

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
                        transition={{ ease: 'easeOut', duration: 0.8 }}
                        onClick={handleEntry}>
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
                            Seja encontrado por clientes.
                        </span>
                        <span className="bodyDescribe">
                            Deixe que os clientes encontre sua loja online nos mais famosos mecanismos de buscas (Google, Yahoo, Bing e etc).
                        </span>
                        <ButtonMore onClick={handleOpenProduct}>SAIBA MAIS...</ButtonMore>
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
                            <ModalBody>
                                <span>
                                    Um site estático é aquele que não conta com ferramentas de gerenciamento para alterações,
                                    consultas, reformulações significativas de conteúdo, sem alteração de código fonte ou um banco de dados;
                                </span>
                                <ul>
                                    Um <b>site estático</b> é recomendado para quem busca:
                                    <li style={{marginTop:'20px'}}>Divulgar sua marca;</li>
                                    <li>Divulgar meios de contato;</li>
                                    <li>Ser encontrado nos mecanismos de buscas; <i>(Google, Yahoo, Bing e etc)</i></li>
                                    <li>Publicar o seu trabalho.</li>
                                </ul>

                                <ul>
                                    <span>
                                        <FaDollarSign className="iconUl"/> Encargos para manter-se online:
                                    </span>
                                    <li style={{marginTop:'20px'}}>Domínio (suamarca.com.br); <i>(Aprox. R$40,00/ano)</i></li>
                                    <li>Hospedagem; <i>(Grátis por tempo indeterminado)</i></li>
                                    <li>Manutenção. <i>(Depende do responsável)</i></li>
                                </ul>

                                <ButtonSend style={{marginTop:'50px'}} onClick={handleConsultProduct}>
                                    <FaHeadset className="iconButton"/>
                                    FALAR COM CONSULTOR
                                </ButtonSend>
                            </ModalBody>
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
                            <ButtonMore onClick={handleOpenSales}>SAIBA MAIS...</ButtonMore>
                        </Product>

                        <Modal isToggled={salesModal} toggle={toggleSales}>
                            <ModalContainer>
                                <ButtonCloseModal onClick={toggleSales}>
                                    <FaTimes/>
                                </ButtonCloseModal>
                                <TitleModal>
                                    <FaShoppingCart className="iconTitle"/>
                                    <span>E-COMMERCE</span>
                                </TitleModal>
                                <ModalBody>
                                    <span>
                                        Loja virtual, loja online, comércio eletrônico ou e-commerce nada mais é que um site onde permite vender pela internet produtos ou 
                                        serviços.
                                    </span>
                                    <ul>
                                        Uma <b>Loja virtual</b> é recomendado para quem busca:
                                        <li style={{marginTop:'20px'}}>Divulgar sua marca;</li>
                                        <li>Converter vendas;</li>
                                        <li>Clientes;</li>
                                        <li>Divulgar meios de contato;</li>
                                        <li>Ser encontrado nos mecanismos de buscas; <i>(Google, Yahoo, Bing e etc)</i></li>
                                        <li>Publicar o seu trabalho.</li>
                                    </ul>

                                    <ul>
                                        <span>
                                            <FaDollarSign className="iconUl"/> Encargos para manter-se online:
                                        </span>
                                        <li style={{marginTop:'20px'}}>Domínio (suamarca.com.br); <i>(Aprox. R$40,00/ano)</i></li>
                                        <li>Hospedagem; <i>(Grátis por tempo indeterminado)</i></li>
                                        <li>Servidor; <i>(Terceirização à partir de R$49,90/mês)</i></li>
                                        <li>Manutenção. <i>(Depende do responsável)</i></li>
                                    </ul>

                                    <ButtonSend style={{marginTop:'50px'}} onClick={handleConsultSales}>
                                        <FaHeadset className="iconButton"/>
                                        FALAR COM CONSULTOR
                                    </ButtonSend>
                                </ModalBody>
                            </ModalContainer>
                    </Modal>

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
                            <ButtonMore onClick={handleOpenSystem}>SAIBA MAIS...</ButtonMore>
                        </Product>

                        <Modal isToggled={systemModal} toggle={toggleSystem}>
                            <ModalContainer>
                                <ButtonCloseModal onClick={toggleSystem}>
                                    <FaTimes/>
                                </ButtonCloseModal>
                                <TitleModal>
                                    <FaProjectDiagram className="iconTitle"/>
                                    <span>APPLICATION</span>
                                </TitleModal>
                                <ModalBody>
                                    <span>
                                        Aplicação feita sob medida para o seu negócio, mude seu conceito sobre controle financeiro;
                                    </span>
                                    <ul>
                                        Uma <b>Aplicação</b> é recomendado para quem busca:
                                        <li style={{marginTop:'20px'}}>Criar algo próprio;</li>
                                        <li>Controle de Vendas;</li>
                                        <li>Controle Financeiro;</li>
                                        <li>Controle Interno;</li>
                                        <li>Emissão de cupons não fiscais;</li>
                                        <li>Relatórios detalhados;</li>
                                        <li>Histórico completo.</li>
                                    </ul>

                                    <ul>
                                        <span>
                                            <FaDollarSign className="iconUl"/> Encargos para manter-se online:
                                        </span>
                                        <li style={{marginTop:'20px'}}>Domínio (suamarca.com.br); <i>(Aprox. R$40,00/ano)</i></li>
                                        <li>Hospedagem; <i>(Grátis por tempo indeterminado)</i></li>
                                        <li>Servidor; <i>(Terceirização à partir de R$149,90/mês)</i></li>
                                        <li>Manutenção. <i>(Depende do responsável)</i></li>
                                    </ul>

                                    <ButtonSend style={{marginTop:'50px'}} onClick={handleConsultSystem}>
                                        <FaHeadset className="iconButton"/>
                                        FALAR COM CONSULTOR
                                    </ButtonSend>
                                </ModalBody>
                            </ModalContainer>
                    </Modal>
                    </ListItem>
                </Store>

                <Contact id="contact">
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
                                <input placeholder="email@exemplo.com" value={email} onChange={e => setEmail(e.target.value)}/>
                            </div>

                            <div className="divInputForm">
                                <button><FaUser/></button>
                                <input placeholder="Nome Completo" value={nome} onChange={e => setNome(e.target.value)}/>
                            </div>
                        </div>

                        <div className="rightItem">
                            <div className="divInputForm">
                                <button><FaGem/></button>
                                <input placeholder="Produto" value={product} onChange={e => setProduct(e.target.value)}/>
                            </div>

                            <div className="divInputForm">
                                <button><FaPhoneAlt/></button>
                                <InputMask
                                    mask="(99)9 9999-9999"
                                    placeholder="(99)9 9999-9999"
                                    value={phone} 
                                    onChange={e => setPhone(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="rightItem">
                            <div className="divInputForm">
                                <button><FaComments/></button>
                                <input placeholder="Assunto" value={subject} onChange={e => setSubject(e.target.value)}/>
                            </div>

                            <div className="divInputForm">
                                <button><FaMapMarkerAlt/></button>
                                <input placeholder="Cidade de atuação" value={cidade} onChange={e => setCidade(e.target.value)}/>
                            </div>
                        </div>

                        <textarea placeholder="Escreva uma mensagem..." value={mensagem} onChange={e => setMensagem(e.target.value)}/>
                        <ButtonSend onClick={handleMail}>ENVIAR</ButtonSend>
                    </Right>
                </Contact>
            </Body>
            <Footer />
        </Container>
    )
}

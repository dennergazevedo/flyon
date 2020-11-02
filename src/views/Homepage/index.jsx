import React from 'react';

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
    Line
} from './styles.js';

// BUTTON
import {
    ButtonJoin
} from '../../components/Buttons/styles.js';

// COMPONENTS
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// ASSETS
import website from '../../assets/img/website.png';
import clients from '../../assets/img/clients.png';

// ICONS
import {
    FaCompressAlt
} from 'react-icons/fa';

export default function Homepage() {
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
                        animate={{ x: 10, opacity: 1 }}
                        transition={{ ease: 'easeOut', duration: 0.8 }}>
                            ENTRAR NOS NEGÓCIOS
                    </ButtonJoin>
                </Subtitle>

                <Website 
                    src={website} 
                    alt="WEBSITE" 
                    animate={{ y: -50, opacity: 1 }}
                    transition={{ ease: 'easeOut', duration: 1 }}/>
                <Responsive>
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

                <Clients>
                    <ItemClients>
                        <Line/>
                        <h1>Conquiste novos clientes e seja reconhecido.</h1>
                        <span>Uma nova jornada próspera com o suporte que precisa.</span>
                    </ItemClients>

                    <ItemClients>
                        <img src={clients} alt="CLIENTES" />
                    </ItemClients>
                </Clients>
            </Body>
            <Footer />
        </Container>
    )
}

import React from 'react';

// STYLED COMPONENTS
import {
    Container,
    Body,
    Title,
    Subtitle,
    Citacao,
} from './styles.js';

// BUTTON
import {
    ButtonJoin
} from '../../components/Buttons/styles.js';

// COMPONENTS
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Homepage() {
    return (
        <Container>
            <Navbar />
            <Body>
                <Title>
                    <span>
                       Sua empresa dentro dos negócios<b>.</b>
                    </span>
                </Title>
                <Subtitle>
                    <Citacao>
                        <span>
                            "Vão existir <b>dois tipos de empresas</b>: as que fazem negócios pela <b>internet</b> e as que estão fora dos <b>negócios</b>." 
                            <i>- Bill Gates</i>
                        </span>
                    </Citacao>
                    <ButtonJoin>ENTRAR NOS NEGÓCIOS</ButtonJoin>
                </Subtitle>
            </Body>
            <Footer />
        </Container>
    )
}

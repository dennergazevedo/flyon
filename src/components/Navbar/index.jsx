import React from 'react'

// STYLED COMPONENTS
import { 
    Container,
    Logomarca,
    Left,
    Right
} from './styles.js';

import {
    ButtonSimple
} from '../Buttons/styles.js';

// ASSETS
import logo from '../../assets/img/logo-azul.png';

export default function Navbar() {
    return (
        <Container>
            <Left>
                <Logomarca 
                    src={logo} 
                    alt="LOGOMARCA"
                    animate={{ x: -15, opacity: 1 }}
                    transition={{ ease: 'easeOut', duration: 0.5 }}
                />
            </Left>
            <Right>
                <ButtonSimple
                    animate={{ x: 15, opacity: 1 }}
                    transition={{ ease: 'linear', duration: 0.2 }}>
                        CONTATO
                </ButtonSimple>
            </Right>
        </Container>
    )
}

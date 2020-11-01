import React from 'react'

// STYLED COMPONENTS
import {
    Footer,
    Left,
    Right,
    Logomarca,
} from './styles.js';

import {
    ButtonSocial
} from '../Buttons/styles.js';

// ASSETS
import logo from '../../assets/img/logo-azul-texto.png';

// ICONS
import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp
} from 'react-icons/fa';

export default function FooterContainer() {
    return (
        <Footer>
            <Left>
                <Logomarca 
                    src={logo} 
                    alt="LOGO"
                    animate={{ x: -15, opacity: 1 }}
                    transition={{ ease: 'easeOut', duration: 1 }}/>
            </Left>
            <Right 
                animate={{ x: 15, opacity: 1 }}
                transition={{ ease: 'easeOut', duration: 1 }}>
                    <ButtonSocial>
                        <FaFacebookF />
                    </ButtonSocial>
                    <ButtonSocial>
                        <FaInstagram />
                    </ButtonSocial>
                    <ButtonSocial>
                        <FaWhatsapp />
                    </ButtonSocial>
            </Right>
        </Footer>
    )
}

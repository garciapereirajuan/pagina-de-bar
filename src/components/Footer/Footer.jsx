import React from 'react'
import { Link } from 'react-scroll'
import { Row, Col } from 'antd'
import { FaCopyright } from 'react-icons/fa'
import socialLogo from '../../assets/img/png/social-logo-2.png'

import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <Row>
                <Col sm={24} lg={6} style={{ textAlign: 'center' }}>
                    <h4>Club Social | Guaminí, Buenos Aires, Argentina</h4>
                    <img src={socialLogo} alt='Social Guaminí, Buenos Aires, Argentina' width='100px' />
                </Col>
                <Col xs={12} sm={8} lg={6} className='col-top'>
                    <h4>Links</h4>
                    <nav>
                        <Link to='home' spy={true} smooth={true} duration={500}>
                            Inicio
                        </Link>
                        <Link to="services" spy={true} smooth={true} duration={500}>
                            Te ofrecemos...
                        </Link>
                        <Link to="gallery" spy={true} smooth={true} duration={500}>
                            Galería
                        </Link>
                        <Link to="location" spy={true} smooth={true} duration={0}>
                            Estamos en...
                        </Link>
                    </nav>
                </Col>
                <Col xs={12} sm={8} lg={6} className='col-top'>
                    <h4>Contacto</h4>
                    <nav>
                        <a
                            className='social-icon'
                            target='_blank'
                            rel='noreferrer'
                            href='https://instagram.com/social.guamini/'>
                            Instagram
                        </a>
                        <a
                            className='social-icon'
                            target='_blank'
                            rel='noreferrer'
                            href='https://wa.me/+5492914363974'>
                            WhatsApp
                        </a>
                    </nav>
                </Col>
                <Col xs={24} sm={8} lg={6} className='col-top'>
                    <h4>Lugar y Horarios</h4>
                    <div>
                        <p>Viernes, sábados, domingos y feriados.</p>
                        <p>A partir de las 19:30hs.</p>
                        <p>Entre San Martín y Dr. Baraldi</p>
                    </div>
                </Col>
            </Row>
            <div className='me'>
                <FaCopyright /> 2022 -
                <a
                    href='https://juangarciapereira.web.app/projects'
                    target='_blank'
                    rel='noreferrer'
                >
                    JUAN G.P.
                </a>
            </div>
        </footer>
    )
}

export default Footer

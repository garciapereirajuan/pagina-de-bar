import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import aboutUs from '../../assets/img/jpg/about-us.jpg'
import { Helmet } from 'react-helmet'

import './AboutUs.css'

const AboutUs = () => {
    const [lang, setLang] = useState(localStorage.getItem('lang'))
    const [display, setDisplay] = useState(['flex', 'none'])
    const location = useLocation()

    useEffect(() => {
        const langFromPath = location.pathname.split('/')[1]

        if (langFromPath === 'es') {
            setDisplay(['flex', 'none'])
        }

        if (langFromPath === 'en') {
            setDisplay(['none', 'flex'])
        }

        setLang(langFromPath)
    }, [location])

    return (
        <>
            <Helmet>
                <title>{lang === 'es' ? 'Quiénes somos' : 'About us'} | Infinite Language Studio</title>
                <meta
                    name='description'
                    content='About us | Online Language Classes | Infinite Language Studio'
                    data-react-helmet='true'
                />
            </Helmet>
            <div className='about-us section-content' style={{ display: display[1] }}>
                <p className='subtitle'>About us</p>

                <p>We both studied at the National University of La Plata, where we first met. Later on, we decided to head to Mendoza where we met again and this project was born.</p>

                <div className='border' />
                <p>Originally from Guaminí, Noelia works online and in-person as an English techer in Tupungato, the city where she currently resides. Lorena is based in San Rafael and works mostly translating, proofreading and copyediting, as well as subtitling audiovisual material. Likewise, we both specialize in teaching ESL In-company and in international exams preparation.</p>

                <div className='border' />
                <p>As language workers, we believe in the value of communication not only as a tool for knowledge but as a philosophy of life.</p>

                <div className='about-us__img'>
                    <img src={aboutUs} width={500} alt='We on the mountain' />
                </div>
                <div className='end-text'>
                    <Link to={`/${lang}/contact`}>
                        Contact us
                    </Link>
                </div>
            </div>
            <div className='about-us section-content' style={{ display: display[0] }}>
                <p className='subtitle'>Sobre nosotras</p>

                <p>Formadas en la Universidad Nacional de La Plata, donde nos conocimos al final de nuestras carreras universitarias, decidimos tomar rumbo a Mendoza, donde nos reencontramos y nació este proyecto.</p>

                <div className='border' />
                <p>Originaria de Guaminí, Noelia trabaja de manera online y presencial como profesora de inglés en Tupungato, ciudad en la que vive actualmente. Lorena reside en San Rafael y se dedica especialmente a la traducción y corrección, tanto como al subtitulado de material audiovisual. Asimismo, ambas coordinamos capacitaciones para empresas en general, industria y turismo vitivinícola y preparación para exámenes internacionales.</p>

                <div className='border' />
                <p>Como trabajadoras del lenguaje, creemos en el valor de la comunicación no sólo como herramienta de trabajo sino como filosofía de vida.</p>

                <div className='about-us__img'>
                    <img src={aboutUs} width={500} alt='Nosotras en la montraña' />
                </div>
                <div className='end-text'>
                    <Link to={`/${lang}/contact`}>
                        Contáctanos
                    </Link>
                </div>
            </div>
        </>
    )
}

export default AboutUs

import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const OurServices = () => {
    const [display, setDisplay] = useState(['flex', 'none'])
    const [lang, setLang] = useState(localStorage.getItem('lang'))
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
                <title>{lang === 'es' ? 'Nuestros servicios' : 'Our services'} | Infinite Language Studio</title>
                <meta
                    name='description'
                    content='Our services | Online Language Classes | Infinite Language Studio'
                    data-react-helmet='true'
                />
            </Helmet>
            <div className='section-content services' style={{ display: display[1] }}>

                <p className='subtitle'>Online language classes</p>

                <p>The online mode turns out to be the most feasible for more students around the world. With years of experience in it, we offer ESL courses at all levels, individual and group classes and training for companies, In-company coaching.</p>

                <p>We offer tailor-made courses and a personalized and flexible service, always prioritizing the interests of our students.</p>

                <div className='border' />
                <p className='subtitle'>Training for international exams</p>

                <p>Effective preparation to obtain the international certifications of level, FCE, CAE, CPE, IELTS or TOEFL, among others, is essential. Therefore, we have the necessary tools to guide you in your preparation to take any of them.</p>

                <div className='border' />
                <p className='subtitle'>Closed Captioning & Subtitling</p>

                <p>We subtitle, closed caption in pop-on and roll-up formats, transcript and reformat your audiovisual material in films, scripts, short documentaries, commercials, interviews and conferences.</p>

                <div className='border' />
                <p className='subtitle'>Translating, editing & proofreading</p>

                <p>We translate, edit and proofread with linguistic passion and in a constant updated dialogue with the literary, academic, audiovisual and business worlds.</p>

                <div className='border' />
                <p className='subtitle'>On Wine Worlds</p>

                <p>Soon we will offer viticulture courses and workshops in English focused on our wine region and the rich language of the world of wines. Located in the country’s region with the strongest viticultural production potential, we feel honored to have the privilege of making connections around the world of wines from the cradle of our local terroirs.</p>

                <div className='end-text'>
                    <Link to={`/${lang}/contact`}>
                        Contact us
                    </Link>
                </div>
            </div>
            <div className='section-content services' style={{ display: display[0] }}>
                {/* <div className='border' /> */}
                <p className='subtitle'>Clases de idioma online</p>

                <p>La modalidad online resulta ser cada vez más viable para más estudiantes en todo el mundo. Con años de experiencia en ella, ofrecemos cursos ESL en todos los niveles, clases individuales y grupales y capacitaciones para empresas. Contamos con cursos a medida y ofrecemos un servicio personalizado y flexible, siempre priorizando los intereses de nuestros alumnos.</p>

                <div className='border' />
                <p className='subtitle'>Capacitaciones para exámenes internacionales</p>

                <p>La preparación para obtener las certificaciones internacionales de nivel, FCE, CAE, CPE, IELTS o TOEFL, entre otras, es fundamental. Por eso, contamos con las herramientas necesarias para guiarte en tu preparación para tomar cualquiera de ellos.</p>

                <div className='border' />
                <p className='subtitle'>Closed Captions & Subtítulos</p>

                <p>Hacemos subtítulos, closed captions, transcripciones y reformats para tu material audiovisual en films, scripts, cortos, documentales, comerciales, entrevistas y conferencias.</p>

                <div className='border' />
                <p className='subtitle'>Traducción & edición</p>

                <p>Traducimos, editamos y corregimos con pasión lingüística y en permanente actualización en el campo literario, académico, audiovisual y empresarial.</p>

                <div className='border' />
                <p className='subtitle'>Descubriendo el mundo de los vinos</p>

                <p>Proximamente ofreceremos cursos y talleres en inglés focalizados en viticultura y el rico idioma de su universo. Ubicadas en la región con el potencial vitivinícola más fuerte del país, nos entusiasma tener el privilegio de generar conexiones junto al mundo de los vinos desde la cuna de la enología local.</p>
                {/* <div className='border' /> */}

                <div className='end-text'>
                    <Link to={`/${lang}/contact`}>
                        Contáctanos
                    </Link>
                </div>
            </div>
        </>
    )
}

export default OurServices

import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { MdMailOutline } from 'react-icons/md'
import { AiOutlineWhatsApp, AiFillInstagram } from 'react-icons/ai'
import { Helmet } from 'react-helmet'

import './Contact.css'

const Contact = () => {
    const [lang, setLang] = useState(localStorage.getItem('lang'))
    const location = useLocation()

    useEffect(() => {
        const langFromPath = location.pathname.split('/')[1]

        setLang(langFromPath)
    }, [location])

    return (
        <>
            <Helmet>
                <title>{lang === 'es' ? 'Contacto' : 'Contact us'} | Infinite Language Studio</title>
                <meta
                    name='description'
                    content='Contact us | Online Language Classes | Infinite Language Studio'
                    data-react-helmet='true'
                />
            </Helmet>
            <div className='section-content'>
                <p className='subtitle'>{lang === 'es' ? 'Nuestras redes' : 'Our social networks'}</p>
                <div className='contact'>
                    <div className='contact__social'>
                        <div className='contact__social-mail'>
                            <a href='mailto:infinitelanguagestudio@gmail.com'>
                                <MdMailOutline size={27} />
                            </a>
                            <span>infinitelanguagestudio@gmail.com</span>
                        </div>
                        <br />
                        <div className='contact__social-group'>
                            <div className='contact__social-whatsapp'>
                                <span>Lorena FS</span>
                                <div className='border-social' />
                                <div>
                                    <a target='_blank' rel='noreferrer' href='https://wa.me/+541132932488'>
                                        <AiOutlineWhatsApp size={28} />
                                        <span>011-3293 2488</span>
                                    </a>
                                </div>
                                <div>
                                    <a target='_blank' rel='noreferrer' href='https://www.instagram.com/noe_garcia_pereira/'>
                                        <AiFillInstagram size={28} />
                                        <span>Instagram</span>
                                    </a>
                                </div>
                            </div>
                            <div className='contact__social-whatsapp'>
                                <span>Noelia GP</span>
                                <div className='border-social' />
                                <div>
                                    <a target='_blank' rel='noreferrer' href='https://wa.me/+541159474947'>
                                        <AiOutlineWhatsApp size={28} />
                                        <span>011-5947 4947</span>
                                    </a>
                                </div>
                                <div>
                                    <a target='_blank' rel='noreferrer' href='https://www.instagram.com/noe_garcia_pereira/'>
                                        <AiFillInstagram size={28} />
                                        <span>Instagram</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='contact__maps'>
                        <div className='contact__maps-san-rafael'>
                            <p>San Rafael</p>
                            <p>{lang === 'es' ? 'Provincia de Mendoza' : 'Mendoza province'}</p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412077.7295504455!2d-69.26521409377436!3d-33.368268342119904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967907fdb13d06a7%3A0xe0fb2796d473309d!2sSan%20Rafael%2C%20Mendoza!5e0!3m2!1ses-419!2sar!4v1664635558427!5m2!1ses-419!2sar" style={{ border: 0 }} allowFullScreen="" loading="lazy" title='Mapa de San Rafael' referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className='contact__maps-tupungato'>
                            <p>Tupungato</p>
                            <p>{lang === 'es' ? 'Provincia de Mendoza' : 'Mendoza province'}</p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253835.7554337564!2d-69.30489703930161!3d-34.93946176778414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967dcd07cab22bc7%3A0x2cb3614db155dff9!2sTupungato%2C%20Mendoza!5e0!3m2!1ses-419!2sar!4v1664635673273!5m2!1ses-419!2sar" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                                title='Mapa de Tupungato' referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className='contact__maps-mendoza'>
                            <p>{lang === 'es' ? 'Provincia de Mendoza' : 'Mendoza province'}</p>
                            <p>Argentina</p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6679145.0404286515!2d-71.97614104958949!3d-35.17404248423927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9679745b5dd5fffd%3A0x902586f1d047824!2sMendoza!5e0!3m2!1ses-419!2sar!4v1664655077272!5m2!1ses-419!2sar" style={{ border: 0 }} allowFullScreen="" loading="lazy" title='Mapa de San Rafael' referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className='border-social' />
                    <div className='contact__end'>
                        {lang === 'es' ? 'Hasta pronto' : 'See you soon'}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact

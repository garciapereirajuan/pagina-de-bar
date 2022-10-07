import React, { useEffect, useState, useRef } from 'react'
import { Row, Col } from 'antd'
import { BsClockFill, BsCalendar4 } from 'react-icons/bs'
import { BiMap, BiMapPin, BiCalendarAlt } from 'react-icons/bi'
import { AiOutlineClockCircle, AiOutlineCalendar } from 'react-icons/ai'
import imgSocial from '../../assets/img/jpg/social-3.jpg'

import './Location.css'

const Location = ({ initialPosition, scrollRotateFourth }) => {
    const [rotate, setRotate] = useState(false)
    const elemRef = useRef()

    useEffect(() => {
        if (initialPosition) {
            setRotate(false)
        }
    }, [initialPosition])

    useEffect(() => {

        const onChange = (entries, observer) => {
            const elem = entries[0]
            if (elem.isIntersecting) {
                setRotate(true)
                observer.disconnect()

                console.log(elem)

            }
        }

        const observer = new IntersectionObserver(onChange, { rootMargin: '10px' })

        observer.observe(elemRef.current)
    }, [initialPosition])

    return (
        <section id='location' className='location'>
            <div className='services__line' />
            <div ref={elemRef} className={`services__title ${rotate ? 'scroll-rotate-fourth' : ''}`}>
                <h3>Estamos en...</h3>
            </div>
            <div className='location__content'>
                <Row>
                    <Col xs={0} sm={0} md={0} lg={1} />
                    <Col xs={24} sm={24} md={24} lg={7} className='location__content-img'>
                        <img src={imgSocial} width='300px' />
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={1} />
                    <Col xs={24} sm={12} md={12} lg={7} className='location__content-col'>
                        <div className='location__content-text'>
                            <div>
                                {<BiMapPin size='24px' />}
                            </div>
                            <p>Estamos ubicados entre San Martín y Baraldi, en Guaminí, provincia de Buenos Aires, Argentina.</p>
                            <div>
                                {<AiOutlineClockCircle size='24px' />}
                            </div>
                            <p>Abrimos 19:30 hs.</p>
                            <div>
                                {<BsCalendar4 size='20px' />}
                            </div>
                            <p>Los días viernes, sábados, domingos y feriados.</p>
                        </div>
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={1} />
                    <Col xs={24} sm={12} md={12} lg={7} className='location__content-col'>
                        <div className='location__content-text'>
                            <div>
                                Sobre nosotros
                            </div>
                            <p>Algo que quieras agregar, el tiempo que están en el sector, etc..<br />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi necessitatibus rem consequuntur.</p>
                        </div>

                    </Col>
                    <Col xs={0} sm={0} md={0} lg={1} />
                </Row>
                <br />
                <br />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1126.4083311707625!2d-62.41931695772733!3d-37.01065811378568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ea413467dffa5f%3A0x7d5f3f72633c2bbb!2sClub%20Social%20Guamin%C3%AD!5e0!3m2!1ses-419!2sar!4v1664992831555!5m2!1ses-419!2sar" width="100%" height="280px" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map-social'></iframe>
            </div>
        </section>
    )
}

export default Location

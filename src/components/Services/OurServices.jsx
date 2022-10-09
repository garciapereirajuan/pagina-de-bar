import React, { useState, useRef, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { imgFood, imgDrink } from '../../utils/imgServices'
import { Row, Col, Card, Modal } from 'antd'
// import Modal from '../Modal'

import 'antd/es/card/style/index.css';
import 'antd/es/grid/style/index.css';
import './OurServices.css';

const OurServices = ({ scrollRotateFirst }) => {
    const [showDrinks, setShowDrinks] = useState(false)
    const elemDrinks = useRef()

    useEffect(() => {

        const onChange = (entries, observer) => {
            const elem = entries[0]
            if (elem.isIntersecting) {
                setShowDrinks(true)
                observer.disconnect()
            }
        }

        const observer = new IntersectionObserver(onChange, { rootMargin: '200px' })

        observer.observe(elemDrinks.current)

        return () => observer.disconnect()
    }, [])

    return (
        <>
            <Helmet>

            </Helmet>
            <section id='services' className='services'>
                <div className='services__line' />
                <div className='services__content'>
                    <div className={`services__title ${scrollRotateFirst}`}>
                        <h3>Te ofrecemos...</h3>
                    </div>
                    <div className='services__content-subtitle'>
                        <h3>¡La mejor comida!</h3>
                    </div>
                    <div className='services__description'>
                        <p>Acá una descripción general de la comida. O lo que quieras escribir..</p>
                    </div>
                    <div className='services__content-row'>
                        <Row>
                            <Col xs={1} sm={1} md={1} />
                            <Col xs={22} sm={22} md={22} >
                                <RenderImages imagesArray={imgFood} />
                            </Col>
                            <Col xs={1} sm={1} md={1} />
                        </Row>
                    </div>
                    <div className='services__content-sheet'>
                        <button
                            className='services__content-sheet__btn'
                            onClick={() => {
                                Modal.info({
                                    centered: true,
                                    title: 'Ver mas platos...',
                                    content: `Esta sección estará lista más adelante. Se cambiará la URL y se abrirá una nueva sección, por ejemplo: socialguamini.com/comidas`,
                                    okText: 'Aceptar'
                                });
                            }}
                        >
                            Ver más...
                        </button>
                    </div>
                </div>
                <br /><br />
                <div ref={elemDrinks} className='services__content'>
                    {/* <div className={`services__title ${scrollRotateSecond}`}>
                        <h3>Y por supuesto...</h3>
                    </div> */}
                    {
                        showDrinks &&
                        (
                            <>
                                <div className='services__content-subtitle'>
                                    <h3>¡Y los mejores tragos!</h3>
                                </div>
                                <div className='services__description'>
                                    <p>Acá una descripción de la bebida. O algo que quieras comentar</p>
                                </div>
                                <div className='services__content-row'>
                                    <Row>
                                        <Col xs={1} sm={1} md={1} />
                                        <Col xs={22} sm={22} md={22} >
                                            <RenderImages imagesArray={imgDrink} />
                                        </Col>
                                        <Col xs={1} sm={1} md={1} />
                                    </Row>
                                </div>
                                <div className='services__content-sheet'>
                                    <button
                                        className='services__content-sheet__btn'
                                        onClick={() => {
                                            Modal.info({
                                                centered: true,
                                                title: 'Ver mas tragos...',
                                                content: `Esta sección estará lista más adelante. Se cambiará la URL y se abrirá una nueva sección, por ejemplo: socialguamini.com/tragos`,
                                                okText: 'Aceptar'
                                            });
                                        }}
                                    >
                                        Ver más...
                                    </button>
                                </div>
                            </>
                        )
                    }
                </div>

            </section >
        </>
    )
}

const RenderImages = ({ imagesArray }) => {
    return (
        <Row>
            {
                imagesArray.map(item => (
                    <Col
                        className='services__row__col'
                        key={item.img}
                        xs={23} sm={11} md={7} lg={7}
                    >
                        < Card
                            cover={
                                < img
                                    src={item.img}
                                    alt={item.title}
                                    title={item.title}
                                />
                            }
                        >
                            <Card.Meta
                                title={item.title}
                                description={item.description}
                            />
                        </Card>
                    </Col>
                ))
            }
        </Row>
    )
}

export default OurServices

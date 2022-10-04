import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { imgFood, imgDrink } from '../../utils/imgData'
import { Row, Col, Card } from 'antd'

import 'antd/es/card/style/index.css';
import 'antd/es/grid/style/index.css';

const OurServices = ({ scrollRotateFirst, scrollRotateSecond }) => {

    const [lang, setLang] = useState(localStorage.getItem('lang'))
    const location = useLocation()

    useEffect(() => {

        // window.onscroll = function () {
        //     var y = window.scrollY;
        //     if (y >= 10 && scrollRotate === '') {
        //         setScrollRotate('scroll-rotate')
        //     }
        //     console.log(y, 'Desde OurServices')
        //     if (y < 10) {
        //         setScrollRotate('')
        //     }
        // }
    }, [])

    return (
        <>
            <Helmet>
            </Helmet>
            <div className='services'>
                <div className={`services__title ${scrollRotateFirst}`}>
                    <h3>Te ofrecemos...</h3>
                </div>
                <div className='services__content'>
                    <div className='services__content-subtitle'>
                        <h3>¡La mejor cena!</h3>
                    </div>
                    <div className='services__content-row'>
                        <Row>
                            <Col xs={0} md={1} />
                            <Col xs={24} md={22} >
                                <Row gutter={[10, 10]}  >
                                    {
                                        imgFood.map(item => (
                                            <Col xs={11} md={8} lg={7}>
                                                < Card
                                                    cover={< img src={item.img} />}
                                                >
                                                    <Card.Meta title={item.title} description={item.description} />
                                                </Card>
                                            </Col>
                                        ))
                                    }
                                </Row>
                            </Col>
                            <Col xs={0} md={1} />
                        </Row>
                    </div>
                </div>
                <br /><br />
                <div className={`services__title ${scrollRotateSecond}`}>
                    <h3>Y por supuesto...</h3>
                </div>
                <div className='services__content'>
                    <div className='services__content-subtitle'>
                        <h3>¡La mejor noche!</h3>
                    </div>
                    <div className='services__content-row'>
                        <Row>
                            <Col xs={0} md={1} />
                            <Col xs={24} md={22} >
                                <Row gutter={[10, 10]}  >
                                    {
                                        imgDrink.map(item => (
                                            <Col xs={11} md={8} lg={7}>
                                                < Card
                                                    cover={< img src={item.img} />}
                                                >
                                                    <Card.Meta title={item.title} description={item.description} />
                                                </Card>
                                            </Col>
                                        ))
                                    }
                                </Row>
                            </Col>
                            <Col xs={0} md={1} />
                        </Row>
                    </div>
                </div>
            </div >
        </>
    )
}

export default OurServices

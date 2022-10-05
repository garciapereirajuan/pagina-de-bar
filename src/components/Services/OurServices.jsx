import React from 'react'
import { Helmet } from 'react-helmet'
import { imgFood, imgDrink } from '../../utils/imgServices'
import { Row, Col, Card } from 'antd'

import 'antd/es/card/style/index.css';
import 'antd/es/grid/style/index.css';
import './OurServices.css';

const OurServices = ({ scrollRotateFirst, scrollRotateSecond }) => {

    return (
        <>
            <Helmet>
            </Helmet>
            <div className='services'>
                <div className='services__line' />
                <div className='services__content'>
                    <div className={`services__title ${scrollRotateFirst}`}>
                        <h3>Te ofrecemos...</h3>
                    </div>
                    <div className='services__content-subtitle'>
                        <h3>¡La mejor comida!</h3>
                    </div>
                    <div className='services__content-row'>
                        <Row>
                            <Col xs={0} sm={0} md={0} />
                            <Col xs={24} sm={24} md={24} >
                                <RenderImages imagesArray={imgFood} />
                            </Col>
                            <Col xs={0} sm={12} md={0} />
                        </Row>
                    </div>
                    <div className='services__content-sheet'>
                        <div className='services__content-sheet__btn'>
                            Ver más...
                        </div>
                    </div>
                </div>
                <br /><br />
                <div className='services__content'>
                    <div className={`services__title ${scrollRotateSecond}`}>
                        <h3>Y por supuesto...</h3>
                    </div>
                    <div className='services__content-subtitle'>
                        <h3>¡Los mejores tragos!</h3>
                    </div>
                    <div className='services__content-row'>
                        <Row>
                            <Col xs={0} sm={0} md={0} />
                            <Col xs={24} sm={24} md={24} >
                                <RenderImages imagesArray={imgDrink} />
                            </Col>
                            <Col xs={0} sm={0} md={1} />
                        </Row>
                    </div>
                    <div className='services__content-sheet'>
                        <div className='services__content-sheet__btn'>
                            Ver más...
                        </div>
                    </div>
                </div>
            </div >
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

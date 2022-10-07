import React, { useEffect } from 'react'
import { imgGallery5A, imgGallery5B, imgGallery5C, imgGallery5D, imgGallery5E } from '../../utils/imgGallery'
import { Row, Col, Image, Spin } from 'antd'
import emojiHeart from '../../assets/img/png/emoji-heart.png'

import 'antd/es/image/style/index.css'

import 'antd/es/style/themes/index.less';
import 'antd/es/style/mixins/index.less';
import './Gallery.css'

const Gallery = ({ scrollRotateThird, scrollRotateFourth }) => {


    return (
        <div className='gallery'>
            <div className='services__line' />
            <div className={`services__title ${scrollRotateThird}`}>
                <h3>Galería</h3>
            </div>
            <div className='services__content-subtitle'>
                <h3>¡Algunas fotos!</h3>
            </div>
            <div className='services__description'>
                <p>
                    {' '}de nuestro bar...{' '}
                    <img style={{ boxShadow: 'none' }} src={emojiHeart} width={30} />{' '}
                    <img style={{ boxShadow: 'none' }} src={emojiHeart} width={30} />
                </p>
            </div>
            <div className='gallery__content'>
                <Row>
                    <Col xs={1} sm={1} md={1} lg={1} />
                    <Col xs={22} sm={22} md={22} lg={22}>
                        <div className='row'>
                            <div className={`column ${scrollRotateFourth}`}>
                                {
                                    imgGallery5A.map(item =>
                                        <Image src={item.img} /> ? <Image src={item.img} /> : <Spin />
                                    )
                                }
                            </div>
                            <div className={`column ${scrollRotateFourth}`}>
                                {
                                    imgGallery5B.map(item =>
                                        <Image src={item.img} /> ? <Image src={item.img} /> : <Spin />
                                    )
                                }
                            </div>
                            <div className={`column ${scrollRotateFourth}`}>
                                {
                                    imgGallery5C.map(item =>
                                        <Image src={item.img} /> ? <Image src={item.img} /> : <Spin />
                                    )
                                }
                            </div>
                            <div className={`column ${scrollRotateFourth}`}>
                                {
                                    imgGallery5D.map(item =>
                                        <Image src={item.img} /> ? <Image src={item.img} /> : <Spin />
                                    )
                                }
                            </div>
                            <div className={`column ${scrollRotateFourth}`}>
                                {
                                    imgGallery5E.map(item =>
                                        <Image src={item.img} /> ? <Image src={item.img} /> : <Spin />
                                    )
                                }
                            </div>
                        </div>
                    </Col>
                    <Col xs={1} sm={1} md={1} lg={1} />
                </Row>
            </div>
        </div>
    )
}

export default Gallery

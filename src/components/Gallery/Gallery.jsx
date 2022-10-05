import React from 'react'
import { imgGallery5A, imgGallery5B, imgGallery5C, imgGallery5D, imgGallery5E } from '../../utils/imgGallery'
import { Row, Col, Image } from 'antd'

import 'antd/es/image/style/index.css'

import 'antd/es/style/themes/index.less';
import 'antd/es/style/mixins/index.less';
import './Gallery.css'

const Gallery = ({ scrollRotateThird }) => {
    return (
        <div className='gallery'>
            <div className={`services__title ${scrollRotateThird}`}>
                <h3>Galería</h3>
            </div>
            <div className='gallery__content'>
                <Row>
                    <Col xs={0} sm={1} md={2} lg={2} />
                    <Col xs={24} sm={22} md={20} lg={20}>
                        <div className='row'>
                            <div className='column'>
                                {
                                    imgGallery5A.map(item =>
                                        <Image src={item.img} />
                                    )
                                }
                            </div>
                            <div className='column'>
                                {
                                    imgGallery5B.map(item =>
                                        <Image width='200' src={item.img} />
                                    )
                                }
                            </div>
                            <div className='column'>
                                {
                                    imgGallery5C.map(item =>
                                        <Image src={item.img} />
                                    )
                                }
                            </div>
                            <div className='column'>
                                {
                                    imgGallery5D.map(item =>
                                        <Image width='200' src={item.img} />
                                    )
                                }
                            </div>
                        </div>
                    </Col>
                    <Col xs={0} sm={1} md={2} lg={2} />
                </Row>
            </div>
        </div>
    )
}

export default Gallery

import React, { useEffect, useState, useRef } from 'react'
import { imgGallery5A, imgGallery5B, imgGallery5C, imgGallery5D, imgGallery5E } from '../../utils/imgGallery'
import { Row, Col, Image, Spin } from 'antd'
import emojiHeart from '../../assets/img/png/emoji-heart.png'
import { LoadingOutlined } from '@ant-design/icons'

import 'antd/es/image/style/index.css'

import 'antd/es/style/themes/index.less';
import 'antd/es/style/mixins/index.less';
import './Gallery.css'

const Gallery = ({ initialPosition, setScrollSmooth }) => {
    const [rotate, setRotate] = useState(false)
    const [loadImages, setLoadImages] = useState(false)
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
                setLoadImages(true)
                setScrollSmooth(true)
                observer.disconnect()
                // console.log()
            }
        }

        const observer = new IntersectionObserver(onChange, { rootMargin: '10px' })

        observer.observe(elemRef.current)
    }, [initialPosition])

    return (
        <section className='gallery' id='gallery'>
            <div className='services__line' />
            <div ref={elemRef} className={`services__title ${rotate ? 'scroll-rotate-third' : ''}`}>
                <h3>Galería</h3>
            </div>
            <div className='services__content-subtitle'>
                <h3>¡Algunas fotos!</h3>
            </div>
            <div className='services__description'>
                <p>
                    de nuestro bar...{' '}
                    <img style={{ boxShadow: 'none' }} src={emojiHeart} width={30} alt='Emoji Corazones' />{' '}
                    <img style={{ boxShadow: 'none' }} src={emojiHeart} width={30} alt='Emoji Corazones' />
                </p>
            </div>
            {loadImages && <RenderImages />}
        </section>
    )
}

const RenderImages = () => {
    const [visible, setVisible] = useState(false)

    const loadIcon = (
        <LoadingOutlined
            style={{ fontSize: 24 }}
            spin
        />
    )

    return (
        <div className='gallery__content'>
            <Row>
                <Col xs={1} sm={1} md={1} lg={1} />
                <Col xs={22} sm={22} md={22} lg={22}>
                    <div className='row'>
                        <Image.PreviewGroup
                            preview={{
                                visible,
                                onVisibleChange: (vis) => setVisible(vis),
                            }}
                        >
                            <div className={`column`}>
                                {
                                    imgGallery5A.map(item =>
                                        <Image src={item.img}
                                            placeholder={<Spin />}
                                        />
                                    )
                                }
                            </div>
                            <div className={`column`}>
                                {
                                    imgGallery5B.map(item =>
                                        <Image src={item.img}
                                            placeholder={<Spin />}
                                        />
                                    )
                                }
                            </div>
                            <div className={`column`}>
                                {
                                    imgGallery5C.map(item =>
                                        <Image src={item.img}
                                            placeholder={<Spin />}
                                        />
                                    )
                                }
                            </div>
                            <div className={`column`}>
                                {
                                    imgGallery5D.map(item =>
                                        <Image src={item.img}
                                            placeholder={<Spin />}
                                        />
                                    )
                                }
                            </div>
                            <div className={`column`}>
                                {
                                    imgGallery5E.map(item =>
                                        <Image src={item.img}
                                            placeholder={<Spin />}
                                        />
                                    )
                                }
                            </div>
                        </Image.PreviewGroup>
                    </div>
                </Col>
                <Col xs={1} sm={1} md={1} lg={1} />
            </Row>
        </div>
    )
}

export default Gallery

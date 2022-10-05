import { Row, Col } from 'antd'
import { BsClockFill, BsFillCalendarDayFill } from 'react-icons/bs'
import { HiLocationMarker } from 'react-icons/hi'
import imgSocial from '../../assets/img/jpg/social-3.jpg'

import './Location.css'

const Location = ({ scrollRotateThird }) => {
    return (
        <div className='location'>
            <div className='location__line' />
            <div className={`location__title ${scrollRotateThird}`}>
                <h3>Estamos en...</h3>
            </div>
            <div className='location__content'>
                <Row>
                    <Col xs={0} sm={1} md={2} lg={2} />
                    <Col xs={24} sm={7} md={6} lg={6}>
                        <img src={imgSocial} width={300} />
                    </Col>
                    <Col xs={0} sm={0} md={1} lg={1} />
                    <Col xs={24} sm={22} md={6} lg={6} className='location__content-col'>


                        <div className='location__content-title'>
                            <p>{<HiLocationMarker />} Guamini (Buenos Aires, Argentina)</p>
                            <p>{<BsClockFill />} Abrimos 19:30 hs</p>
                            <p>{<BsFillCalendarDayFill />} Viernes, sábados, domingos y feriados</p>
                        </div>
                        <div className='location__content-map'>
                            <p>Entre Baraldi y San Martín</p>

                        </div>
                    </Col>
                    <Col xs={0} sm={0} md={1} lg={1} />
                    <Col xs={24} sm={22} md={6} lg={6} className='location__content-col'>
                        <div className='location__content-description'>
                            <div className='location__content-title'>
                                {/* <p>Social</p> */}
                            </div>
                            <p>Con más de 14 años de experiencia en el sector, una descripción de ustedes tus palabras...</p> <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi necessitatibus rem consequuntur atque ratione id unde quod deserunt fugit possimus pariatur, molestias voluptatum veritatis officiis nisi nemo animi ea vitae?</p>
                        </div>
                    </Col>

                    <Col xs={0} sm={1} md={2} lg={2} />
                </Row>
                <br />
                <br />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1126.4083311707625!2d-62.41931695772733!3d-37.01065811378568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ea413467dffa5f%3A0x7d5f3f72633c2bbb!2sClub%20Social%20Guamin%C3%AD!5e0!3m2!1ses-419!2sar!4v1664992831555!5m2!1ses-419!2sar" width="100%" height="280px" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map-social'></iframe>
            </div>
        </div>
    )
}

export default Location

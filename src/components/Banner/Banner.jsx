import React from 'react'
import imgBanner from '../../assets/img/jpg/alcohol.jpg'

import './Banner.css'

const Banner = () => {
    return (
        <section className='banner'>
            <div className='text'>
                <p>Tenemos<br /> los mejores traguitos<br /> y la comida más rica</p>
                <p>OPEN DOOR<br /><span>19:30hs</span></p>
            </div>
            {/* <img src={imgBanner} alt='Bebidas alcoholicas' /> */}
        </section>
    )
}

export default Banner

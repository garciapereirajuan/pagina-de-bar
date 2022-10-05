import { FaHome, FaFacebook } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { AiFillInstagram } from 'react-icons/ai'

import './MenuTop.css'

const MenuTop = () => {
    return (
        <>
            <div onClick={() => console.log('Ir a home')}>
                <FaHome />
            </div>
            <div className='social-icon'>
                <IoLogoWhatsapp />
            </div>
            <div onClick={() => console.log('Ir a servicios')}>
                Te ofrecemos...
            </div>
            <div onClick={() => console.log('Ir a galería')}>
                Galería
            </div>
            <div onClick={() => console.log('Estamos en...')}>
                Estamos en...
            </div>
            <div className='social-icon'>
                <AiFillInstagram />
            </div>
            <div className='social-icon'>
                <FaFacebook />
            </div>
        </>
    )
}

export default MenuTop

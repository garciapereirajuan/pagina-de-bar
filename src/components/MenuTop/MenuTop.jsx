import { Link } from 'react-scroll'
import { FaHome, FaFacebook } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { AiFillInstagram } from 'react-icons/ai'

import './MenuTop.css'

const MenuTop = () => {
    return (
        <>
            <Link to='home' spy={true} smooth={true} duration={500}>
                <FaHome />
            </Link>
            <Link to="services" spy={true} smooth={true} duration={500}>
                Te ofrecemos...
            </Link>
            <Link to="gallery" spy={true} smooth={true} duration={500}>
                Galería
            </Link>
            <Link to="location" spy={true} smooth={true} duration={0}>
                Estamos en...
            </Link>
            <a className='social-icon' target='_blank' rel='noreferrer' href='https://instagram.com/social.guamini/'>
                <AiFillInstagram />
            </a>
            <a className='social-icon' target='_blank' rel='noreferrer' href='https://wa.me/+5492914363974'>
                <IoLogoWhatsapp />
            </a>
            {/* <a className='social-icon'>
                <FaFacebook />
            </a> */}
        </>
    )
}

export default MenuTop

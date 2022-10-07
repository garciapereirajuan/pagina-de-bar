import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { MenuContext } from 'react-flexible-sliding-menu'
import { BsTranslate } from 'react-icons/bs'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import { IoIosRestaurant } from 'react-icons/io'
import { GrGallery } from 'react-icons/gr'
import { BiMapPin } from 'react-icons/bi'

import './MenuSlider.css'

const DashboardSVG = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
    </svg>
);

const Menu = () => {
    const [lang, setLang] = useState(localStorage.getItem('lang'))
    const { closeMenu } = useContext(MenuContext);
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        localStorage.setItem('lang', lang)
    }, [lang])

    return (
        <div className="Menu">
            <h1>Social<br />Guaminí<br />Buenos Aires</h1>
            <Link
                to='home'
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => closeMenu()}
            >
                <FaHome /> Inicio
            </Link>
            <Link
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => closeMenu()}
            >
                <IoIosRestaurant /> Te ofrecemos...
            </Link>
            <Link
                to="gallery"
                spy={true}
                smooth={true}
                duration={0}
                onClick={() => closeMenu()}
            >
                <GrGallery /> Galería
            </Link>
            <Link
                to="location"
                spy={true}
                smooth={false}
                duration={0}
                onClick={() => closeMenu()}
            >
                <BiMapPin /> Estamos en...
            </Link>
            <a
                className='social-icon'
                target='_blank'
                rel='noreferrer'
                href='https://instagram.com/social.guamini/'
                onClick={() => closeMenu()}
            >
                <AiFillInstagram /> Seguinos
            </a>
            <a
                className='social-icon'
                target='_blank'
                rel='noreferrer'
                href='https://wa.me/+5492914363974'
                onClick={() => closeMenu()}
            >
                <IoLogoWhatsapp /> Escribinos
            </a>
            <button onClick={closeMenu} className='primary-button'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                </svg>
            </button>
        </div>
    )
}

export default Menu

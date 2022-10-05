import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { MenuContext } from 'react-flexible-sliding-menu'
import { BsTranslate } from 'react-icons/bs'
import { FaHome } from 'react-icons/fa'

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
            <h1>Menu</h1>
            <div
                id={`/${lang}/home`}
                onClick={() => { navigate(`/${lang}/home`); closeMenu() }}
            >
                <FaHome /> {lang === 'es' ? 'Inicio' : 'Home'}
            </div>
            <div
                id={`/${lang}/our-services`}
                onClick={() => { navigate(`/${lang}/our-services`); closeMenu() }}
            >
                <DashboardSVG /> {lang === 'es' ? 'Nuestros servicios' : 'Our services'}
            </div>
            <div
                id={`/${lang}/about-us`}
                onClick={() => { navigate(`/${lang}/about-us`); closeMenu() }}
            >
                <DashboardSVG /> {lang === 'es' ? 'Quiénes somos' : 'About us'}
            </div>
            <div
                id={`/${lang}/contact`}
                onClick={() => { navigate(`/${lang}/contact`); closeMenu() }}
            >
                <DashboardSVG /> {lang === 'es' ? 'Contacto' : 'Contact us'}
            </div>
            <div
                // id='/'
                onClick={() => {
                    const path = location.pathname.split('/')[2]

                    if (lang === 'es') {
                        setLang('en')
                        localStorage.setItem('lang', 'en')
                        navigate(`/en/${path}`)
                        closeMenu()
                    } else {
                        setLang('es')
                        localStorage.setItem('lang', 'es')
                        navigate(`/es/${path}`)
                        closeMenu()
                    }
                }
                }
            >
                <BsTranslate /> {lang === 'es' ? 'English' : 'Español'}
            </div>
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

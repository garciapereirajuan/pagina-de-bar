import { useEffect, useState, useContext } from 'react'
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
// import infinityLogo from './assets/img/jpg/infinity-logo.png';
import socialLogo from './assets/img/jpg/social-logo-transparent-2.png'
import emojiGuiño from './assets/img/png/emoji-3.png'
import emojiGafas from './assets/img/png/emoji-5.png'
import imgBanner from './assets/img/jpg/alcohol.jpg'
import Home from './components/Home'
import OurServices from './components/Services'
import AboutUs from './components/AboutUs'
import Contact from './components/ContactUs'
import { BsTranslate, BsWhatsapp } from 'react-icons/bs'
import { FaHome, FaFacebook, FaCopyright, FaWhatsapp } from 'react-icons/fa'
import { FiInstagram, FiMenu } from 'react-icons/fi'
import { BsLightbulbFill } from 'react-icons/bs'
import { MdMailOutline } from 'react-icons/md'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import { motion } from 'framer-motion'
import { MenuContext } from 'react-flexible-sliding-menu'

import './App.css';

function App() {
  const [background, setBackground] = useState('')
  const [socialBar, setSocialBar] = useState('')
  const [select, setSelect] = useState('')
  const [title, setTitle] = useState(<span>Tu bar amigo  <img src={emojiGuiño} width={46} alt='Emoji guiño' /></span>)
  const [lang, setLang] = useState('es')
  const [finishAnimationTitle, setFinishAnimationTitle] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { toggleMenu } = useContext(MenuContext)

  useEffect(() => {

    const bgClass = {
      [`/${lang}/`]: 'background-home',
      [`/${lang}/home`]: 'background-home',
      [`/${lang}/our-services`]: 'background-services',
      [`/${lang}/about-us`]: 'background-about-us',
      [`/${lang}/contact`]: 'background-contact'
    }

    const btnClass = {
      [`/${lang}/`]: 'btn-select',
      [`/${lang}/home`]: 'btn-select',
      [`/${lang}/our-services`]: 'btn-select',
      [`/${lang}/about-us`]: 'btn-select',
    }

    const titles = {
      [`/${lang}/`]: 'Tu bar amigo',
      [`/${lang}/home`]: 'Tu bar amigo',
      [`/${lang}/our-services`]: lang === 'es' ? 'Servicios' : 'Our services',
      [`/${lang}/about-us`]: lang === 'es' ? '¿Quiénes somos?' : 'About us',
      [`/${lang}/contact`]: lang === 'es' ? 'Contacto' : 'Contact us'
    }

    window.scrollTo(0, 0)

    const element = document.querySelectorAll('.animation')[0]
    if (element) {
      element.classList.remove('.animation')
    }

    const bg = bgClass[location.pathname]

    setBackground(`${bg} animation`)
    document.querySelectorAll('.content')[0].classList.add('animation-content')

    setTimeout(() => {
      document.querySelectorAll('.animation')[0].classList.remove('animation')
      document.querySelectorAll('.content')[0].classList.remove('animation-content')
    }, 355)

    // setTitle(titles[location.pathname])
    setSelect(btnClass[location.pathname])
    setSelect('')

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, lang])

  useEffect(() => {

  }, [lang])

  useEffect(() => {
    const langStorage = localStorage.getItem('lang')

    if (!langStorage) {
      localStorage.setItem('lang', 'es')
      if (location.pathname === '/') {
        navigate(`/es/home`)
      }
      return
    }

    if (langStorage) {
      setLang(langStorage)
      if (location.pathname === '/') {
        navigate(`/${langStorage}/home`)
      }
    }

  }, [lang, location, navigate])
  window.onscroll = function () {
    var y = window.scrollY;
    if (y >= 0 && socialBar === '') {
      setSocialBar('bg-scroll-social')
    }
    console.log(y)
    if (y < 10) {
      setSocialBar('')
    }
  };

  useEffect(() => {
    setTitle('Tu bar, amigo')
    setTimeout(() => setTitle('Tu bar, amig@'), 4620)
    setTimeout(() => setTitle(<span>Tu bar amigo  <img src={emojiGuiño} width={46} alt='Emoji guiño' /></span>), 7350)
    setTimeout(() => setFinishAnimationTitle(true), 10550)
  }, [])

  const changeTitle = (emoji) => {
    if (!finishAnimationTitle) {
      return
    }
    setTitle(<span>Tu bar amigo  <img src={emoji} width={46} alt='Emoji gafas' /></span>)
  }


  return (
    <div className="App">
      <div className={`background ${background}`} />
      <header className='header-home'>
        {/* <div className={`social ${socialBar}`}>
          <a href='mailto:no-reply@example.com'>
            <AiFillInstagram size={37} />
          </a>
          <Link to='/contact'>
            <FaFacebook size={32} />
          </Link>
          <Link to='/contact'>
            <IoLogoWhatsapp size={35} />
          </Link>
        </div> */}
        <div
          className='header-home__logo'
        >
          <div onClick={() => changeTitle(emojiGafas)}>
            {/* <InfinityLogo /> */}
            <img src={socialLogo} alt='Social-Logo' width='150px' />
          </div>
        </div>
        <div
          className='header-home__title'
          onClick={() => changeTitle(emojiGuiño)}
        >
          <div>
            <p>{title}</p>
          </div>
        </div>
      </header>
      <div className={`menu-slider ${socialBar}`}>
        <div onClick={toggleMenu}>
          <FiMenu />
        </div>
      </div>
      <div className={`menu ${socialBar}`}>
        <div
          id={`/${lang}/home`}
          className={select}
          onClick={() => navigate(`/${lang}/home`)}
        >
          <FaHome />
        </div>
        <div className='social-icon'>
          <IoLogoWhatsapp />
        </div>
        <div
          id={`/${lang}/our-services`}
          className={select}
          onClick={() => navigate(`/${lang}/our-services`)}
        >
          {lang === 'es' ? 'Te ofrecemos...' : 'Our services'}
        </div>
        {/* <div
          id={`/${lang}/about-us`}
          className={select}
          onClick={() => navigate(`/${lang}/about-us`)}
        >
          {lang === 'es' ? 'Quiénes somos' : 'About us'}
        </div> */}
        <div
          id={`/${lang}/contact`}
          className={select}
          onClick={() => navigate(`/${lang}/contact`)}
        >
          {lang === 'es' ? 'Galería' : 'Contact us'}
        </div>
        <div
          id={`/${lang}/contact`}
          className={select}
          onClick={() => navigate(`/${lang}/contact`)}
        >
          {lang === 'es' ? 'Estamos en...' : 'Contact us'}
        </div>
        <div className='social-icon'>
          <AiFillInstagram />
        </div>
        <div className='social-icon'>
          <FaFacebook />
        </div>
      </div>
      <div className='banner'>
        <div className='text'>
          <p>Tenemos<br /> los mejores traguitos<br /> y la comida más rica</p>
          <p>OPEN DOOR<br /><span>19:30hs</span></p>
        </div>
        <img src={imgBanner} alt='Bebidas alcoholicas' />
      </div>
      <div className='services'>

      </div>
      <div className='content'>
        {/* <Routes>
          <Route path={`/${lang}/home`} element={<Home />} />
          <Route path={`/${lang}/our-services`} element={<OurServices lang={lang} />} />
          <Route path={`/${lang}/about-us`} element={<AboutUs />} />
          <Route path={`/${lang}/contact`} element={<Contact />} />
        </Routes> */}

      </div>
      <div className='footer'>
        <FaCopyright /> 2022 -
        <a
          href='https://juangarciapereira.web.app/projects'
          target='_blank'
          rel='noreferrer'
        >
          JUAN G.P.
        </a>
      </div>
    </div >
  );
}

export default App;

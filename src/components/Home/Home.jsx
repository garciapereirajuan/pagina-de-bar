import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import GirlOnline from '../../assets/img/jpg/kindle.jpg';
import { Helmet } from 'react-helmet'

import './Home.css'

const Home = () => {
  const [lang, setLang] = useState(localStorage.getItem('lang'))
  const location = useLocation()

  useEffect(() => {
    const langFromPath = location.pathname.split('/')[1]

    setLang(langFromPath)
  }, [location])

  return (
    <>
      <Helmet>
        <title>{lang === 'es' ? 'Inicio' : 'Home'} | Infinite Language Studio</title>
        <meta
          name='description'
          content='Home | Online Language Classes | Infinite Language Studio'
          data-react-helmet='true'
        />
      </Helmet>
      <div className='home'>
        <Link to={`/${lang}/our-services`}>
          <div>
            {lang === 'es' ? 'Clases de Idioma online' : 'Online language classes'}
            <img src={GirlOnline} width={500} alt='¡Clases online!' />
          </div>
        </Link>
      </div>
    </>
  )
}

export default Home

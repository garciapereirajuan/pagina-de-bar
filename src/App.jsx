import { useEffect, useState, useContext } from 'react'
import { FaCopyright } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { MenuContext } from 'react-flexible-sliding-menu'
import emojiGuiño from './assets/img/png/emoji-guiño.png'
import HeaderHome from './components/HeaderHome'
import MenuTop from './components/MenuTop'
import Banner from './components/Banner'
import OurServices from './components/Services'
import Location from './components/Location'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

import './App.css';

function App() {
  const [scrollStaticMenu, setScrollStaticMenu] = useState('')
  const [scrollRotateFirst, setScrollRotateFirst] = useState('')
  const [scrollRotateSecond, setScrollRotateSecond] = useState('')
  const [scrollRotateThird, setScrollRotateThird] = useState('')
  const [title, setTitle] = useState(<span>Tu bar amigo  <img src={emojiGuiño} width={46} alt='Emoji guiño' /></span>)
  // const [finishAnimationTitle, setFinishAnimationTitle] = useState(false)

  const { toggleMenu } = useContext(MenuContext)

  useEffect(() => {

    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  window.onscroll = function () {
    var y = window.scrollY;
    if (y >= 180) {
      setScrollStaticMenu('scroll-static-menu')
      setScrollRotateFirst('scroll-rotate-first')
    }
    if (y >= 1300) {
      setScrollRotateSecond('scroll-rotate-second')
    }
    if (y >= 2500) {
      setScrollRotateThird('scroll-rotate-third')
    }
    if (y < 180) {
      setScrollStaticMenu('')
      setScrollRotateFirst('')
    }
    if (y < 1300) {
      setScrollRotateSecond('')
    }
    if (y < 2500) {
      setScrollRotateThird('')
    }
  };

  // useEffect(() => {
  //   setTitle('Tu bar, amigo')
  //   setTimeout(() => setTitle('Tu bar, amig@'), 4620)
  //   setTimeout(() => setTitle(<span>Tu bar amigo  <img src={emojiGuiño} width={46} alt='Emoji guiño' /></span>), 7350)
  //   setTimeout(() => setFinishAnimationTitle(true), 10550)
  // }, [])

  const changeTitle = (emoji) => {
    // if (!finishAnimationTitle) {
    //   return
    // }
    setTitle(<span>Tu bar amigo  <img src={emoji} width={46} alt='Emoji gafas' /></span>)
  }


  return (
    <div className="App">
      <HeaderHome changeTitle={changeTitle} title={title} />
      <div className={`menu-slider ${scrollStaticMenu}`}>
        <div onClick={toggleMenu}>
          <FiMenu />
        </div>
      </div>
      <div className={`menu-top ${scrollStaticMenu}`}>
        <MenuTop />
      </div>
      <div className='banner__background' />
      <Banner />
      <OurServices scrollRotateFirst={scrollRotateFirst} scrollRotateSecond={scrollRotateSecond} />
      <Location scrollRotateThird={scrollRotateThird} />
      <Gallery scrollRotateThird={scrollRotateThird} />
      <Footer />
    </div >

  );
}

export default App;

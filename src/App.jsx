import { useEffect, useState, useRef, useContext } from 'react'
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
  const [scrollRotateFourth, setScrollRotateFourth] = useState('')
  const [initialPosition, setInitialPosition] = useState(true)
  const [scrollSmooth, setScrollSmooth] = useState(false)
  const [title, setTitle] = useState(<span>Tu bar amigo  <img src={emojiGuiño} width={46} alt='Emoji guiño' /></span>)
  // const [finishAnimationTitle, setFinishAnimationTitle] = useState(false)

  const { toggleMenu } = useContext(MenuContext)

  useEffect(() => {

    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  window.onscroll = function () {
    var y = window.scrollY;
    if (y === 0) {
      setInitialPosition(true);
    }
    if (y !== 0) {
      setInitialPosition(false)
    }
    if (y >= 180) {
      setScrollStaticMenu('scroll-static-menu')
      setScrollRotateFirst('scroll-rotate-first')
    }
    if (y >= 1300) {
      setScrollRotateSecond('scroll-rotate-second')
    }
    if (y >= 3800) {
      setScrollRotateFourth('scroll-rotate-fourth')
    }
    if (y < 180) {
      setScrollStaticMenu('')
      setScrollRotateFirst('')
    }
    if (y < 1300) {
      setScrollRotateSecond('')
    }
    if (y < 3800) {
      setScrollRotateFourth('')
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
    <>
      <div className="App">
        <HeaderHome changeTitle={changeTitle} title={title} />
        <div className={`menu-slider ${scrollStaticMenu}`}>
          <div onClick={toggleMenu}>
            <FiMenu />
          </div>
        </div>
        <div className={`menu-top ${scrollStaticMenu}`}>
          <MenuTop scrollSmooth={scrollSmooth} />
        </div>
        <div className='banner__background' />
        <Banner />
        <main>
          <OurServices scrollRotateFirst={scrollRotateFirst} scrollRotateSecond={scrollRotateSecond} />
          <Gallery initialPosition={initialPosition} setScrollSmooth={setScrollSmooth} />
          <Location initialPosition={initialPosition} scrollRotateFourth={scrollRotateFourth} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

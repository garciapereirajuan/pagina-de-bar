import React from 'react'
import emojiGafas from '../../assets/img/png/emoji-gafas.png'
import emojiGuiño from '../../assets/img/png/emoji-guiño.png'
import socialLogo from '../../assets/img/png/social-logo-2.png'

import './HeaderHome.css'

const HeaderHome = ({ changeTitle, title }) => {
    return (
        <header className='header-home'>
            <div
                className='header-home__logo'
            >
                <div onClick={() => changeTitle(emojiGafas)}>
                    <img src={socialLogo} alt='Social-Logo' width='100px' />
                </div>
            </div>
            <div
                className={`header-home__title`}
                onClick={() => changeTitle(emojiGuiño)}
            >
                <div>
                    <p>{title}</p>
                </div>
            </div>
        </header>
    )
}

export default HeaderHome



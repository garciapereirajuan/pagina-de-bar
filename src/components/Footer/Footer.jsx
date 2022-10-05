import React from 'react'
import { FaCopyright } from 'react-icons/fa'

import './Footer.css'

const Footer = () => {
    return (
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
    )
}

export default Footer

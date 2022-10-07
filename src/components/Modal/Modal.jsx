import { Modal as ModalAntd } from 'antd'

import React from 'react'

const Modal = ({ isVisible, setIsVisible, children }) => {
    return (
        <ModalAntd
            centered
            visible={isVisible}
            onCancel={() => setIsVisible(false)}
            footer={false}
        >
            {children}
        </ModalAntd>
    )
}

export default Modal

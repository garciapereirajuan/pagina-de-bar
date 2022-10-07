import { Modal as ModalAntd } from 'antd'

import React from 'react'

const Modal = ({ isVisible, setIsVisible, content }) => {
    return (
        <ModalAntd
            centered
            visible={isVisible}
            onCancel={() => setIsVisible(false)}
            footer={false}
        >
            {content}
        </ModalAntd>
    )
}

export default Modal

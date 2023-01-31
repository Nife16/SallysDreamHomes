import React from 'react'
import '../css/modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

function Modal(props) {

  const closeModal = () => {
    props.setIsModalShowing(false)
  }

  return (
    <div className='modal-background'>

      <div className='modal flex-col'>

        <div className='modal-header'>
          <FontAwesomeIcon icon={faX} className="x-close" onClick={closeModal} />
        </div>
        <h1 className='content-center'>{props.title}</h1>
        <div className='modal-body'>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Modal
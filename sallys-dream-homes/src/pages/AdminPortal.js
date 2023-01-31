import React, { useEffect } from 'react'
import '../css/admin-portal.css'
import Modal from '../reusable/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import CreateHouseModal from './CreateHouseModal'
import ViewProperties from './ViewProperties'
import { useNavigate } from 'react-router'

function AdminPortal(props) {

    const navigator = useNavigate()
    useEffect(() => {
        const email = localStorage.getItem("email")

        if(email === null) {
            navigator('/')
        }
    })

    const openCreateHouseModal = () => {
        props.setIsModalShowing(true)
        props.setWhichModal('create-house')
    }
    
    const openViewPropertiesModal = () => {
        props.setIsModalShowing(true)
        props.setWhichModal('view-propertys')
    }
    
    const renderModal = () => {

        if(props.isModalShowing) {

            if(props.whichModal === 'create-house') {
                return (
                    <Modal setIsModalShowing={props.setIsModalShowing} title={'Create A House & Address'}>
                        <CreateHouseModal 
                            user={props.user} 
                            setUser={props.setUser}
                            setIsModalShowing={props.setIsModalShowing}
                        />
                    </Modal>
                )
            } else if(props.whichModal === 'view-propertys') {
                return (
                    <Modal setIsModalShowing={props.setIsModalShowing} title={'All Propertys'}>
                        <ViewProperties 
                            user={props.user} 
                            setUser={props.setUser}
                            setIsModalShowing={props.setIsModalShowing}
                        />
                    </Modal>
                )
            }
        } else {
            return null
        }
    }

    return (
        <div className='flex-row'>
            <div className='flex-col portal-box' onClick={openCreateHouseModal}>
                <h1>Create a House</h1>
                <FontAwesomeIcon icon={faHouse} className="house" />
            </div>
            <div className='flex-col portal-box' onClick={openViewPropertiesModal}>
                View Homes and Stats
            </div>
            {renderModal()}
        </div>
    )
}

export default AdminPortal
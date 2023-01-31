import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../css/view-propertys.css'
import moment from 'moment'

function ViewProperties() {

    const [allPropertys, setAllPropertys] = useState([])
    const [activeProperty, setActiveProperty] = useState({})

    // Create our number formatter.
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    useEffect(() => {
        axios.get('http://localhost:8080/property/getAll')
            .then((response) => {
                setAllPropertys(response.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    const setActivePropertyFunc = (event) => {
        axios.get(`http://localhost:8080/property/getById/${event.target.id}`)
            .then((response) => {
                console.log(response.data)
                setActiveProperty(response.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const displayImageList = () => {

        return allPropertys.map((property) => {
            return (
                <img id={property.id} onClick={setActivePropertyFunc} src={property.imageUrl} className='image-list-item' />
            )
        })

    }

    const renderActiveProperty = () => {
        if (activeProperty.id !== undefined) {
            return (
                <div className='flex-col center full-width'>
                    <img src={activeProperty.imageUrl} className='active-image' />
                    <div><strong>Price</strong> : {formatter.format(activeProperty.price)}</div>
                    <div><strong>Date Posted</strong> : {moment(activeProperty.datePosted).format('MMMM Do YYYY')}</div>
                    <div><strong>Is on Market?</strong> : {activeProperty.isSold ? "No" : "Yes"}</div>
                    <div><strong>Square Feet</strong> : {activeProperty.sqFeet}</div>
                    <div><strong>Beds</strong> : {activeProperty.beds}</div>
                    <div><strong>Baths</strong> : {activeProperty.baths}</div>
                </div>
            )
        } else {
            return (
                <div className='flex-col center full-width'>
                    CLICK AN IMAGE ABOVE
                </div>
            )
        }
    }

    return (
        <div className='flex-col full-height max-width'>
            <div className='flex-row house-icons'>
                {displayImageList()}
            </div>
            <div className='flex-row house-box'>
                {renderActiveProperty()}
            </div>
        </div>
    )
}

export default ViewProperties
import axios from 'axios';
import React, { useState } from 'react'
import CreateAddressForm from '../reusable/CreateAddressForm';
import CreateAHouseForm from '../reusable/CreateAHouseForm';

function CreateHouseModal(props) {

    const [property, setProperty] = useState({
        houseType: "",
        price: 0,
        beds: 0,
        baths: 0,
        sqFeet: 0,
        imageUrl: ""
    })
    const [address, setAddress] = useState({
        streetNo: null,
        streetName: "",
        unitNumber: null,
        city: "",
        state: "",
        zipCode: null
    })

    const propertyChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempProperty = { ...property };
        tempProperty[name] = value;
        setProperty(tempProperty)
    }

    const addressChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempAddress = { ...address };
        tempAddress[name] = value;
        setAddress(tempAddress)
    }

    const switchToAddressForm = () => {
        axios.post(`http://localhost:8080/property/save/${props.user.email}`, property)
            .then((response) => {
                setProperty(response.data)
                // props.setIsModalShowing(false)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const saveAddress = () => {
        axios.post(`http://localhost:8080/address/save/${property.id}`, address)
            .then((response) => {
                props.setIsModalShowing(false)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const renderCorrectForm = () => {

        if (property.id === undefined) {
            return (
                <CreateAHouseForm
                    property={property}
                    changeHandler={propertyChangeHandler}
                    submitHandler={switchToAddressForm}
                />
            )
        } else {
            return (
                <CreateAddressForm
                    address={address}
                    changeHandler={addressChangeHandler}
                    submitHandler={saveAddress}
                />
            )
        }
    }

    return (
        renderCorrectForm()
    )
}

export default CreateHouseModal
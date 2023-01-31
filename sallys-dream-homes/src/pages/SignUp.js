import React, { useState } from 'react'
import PageWrapper from '../reusable/PageWrapper'
import '../css/sign-up.css'
import axios from 'axios'
import { useNavigate } from 'react-router'

function SignUp(props) {

    const navigator = useNavigate()
    const [user, setUser] = useState({ 
        firstName: "",
        lastName: "",
        email: "",
        password: ""
     })

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempUser = { ...user };
        tempUser[name] = value;
        setUser(tempUser)
    }

    const submitHandler = () => {
        axios.post('http://localhost:8080/account/signUp', user)
        .then((response) => {
            props.setUser(response.data)
            navigator('/')
        })
        .catch((e) => {
            console.log(e)
        })
    }

    return (
            <div className='sign-up-box flex-col'>
                <div className='form-header'>Sign Up!!!!</div>
                <div className='flex-row'>
                    <div className="flex-col">
                        <label className="form-label">First Name</label>
                        <input name="firstName" type="text" placeholder='First Name'
                            className="form-input" id="inputFirstName"
                            value={user.firstName} onChange={changeHandler} 
                        />
                    </div>
                    <div className="flex-col">
                        <label className="form-label">Last Name</label>
                        <input name="lastName" type="text" placeholder='Last Name'
                            className="form-input" id="inputLastName"
                            value={user.lastName} onChange={changeHandler} 
                        />
                    </div>
                </div>
                <div className='flex-row'>
                    <div className="flex-col">
                        <label className="form-label">Email</label>
                        <input name="email" type="text" placeholder='Email@example.com'
                            className="form-input" id="email"
                            value={user.email} onChange={changeHandler} 
                        />
                    </div>
                    <div className="flex-col">
                        <label className="form-label">Password</label>
                        <input name="password" type="password" placeholder='Password'
                            className="form-input" id="password"
                            value={user.password} onChange={changeHandler} 
                        />
                    </div>
                </div>
                <button className='submit' onClick={submitHandler}>Submit</button>
            </div>
    )
}

export default SignUp
import React, { useState } from 'react'
import '../css/sign-up.css'
import axios from 'axios'
import { useNavigate } from 'react-router'

function SignIn(props) {

    const navigator = useNavigate()
    const [user, setUser] = useState({ 
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

        axios.post('http://localhost:8080/account/signIn', user)
        .then((response) => {
            localStorage.setItem("email", response.data.email)
            props.setUser(response.data)
            if(response.data.isAgent === true) {
                navigator('/adminPortal')
            } else {
                navigator('/')
            }
        })
        .catch((e) => {
            console.log(e)
        })
    }

    return (
            <div className='sign-up-box flex-col'>
                <div className='form-label'>Sign In!!!!</div>
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

export default SignIn
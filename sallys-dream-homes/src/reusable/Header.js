import React from 'react'
import '../css/header.css'

function Header(props) {

    const renderRightButtons = () => {
        
        if (props.user !== null) {
            return (
                <div className='header-container content-center'>
                    <a href="#" className='header-links'>
                        <div className='link-box'>
                            Hi dad
                        </div>
                    </a>
                    <a className='header-links' href="/">
                        <div className='link-box'>
                            Home
                        </div>
                    </a>
                    <a className='header-links' href="#">
                        <div className='link-box'>
                            Hi mom
                        </div>
                    </a>
                </div>
            )
        } else {
            return (
                <div className='header-container content-center'>
                    <a href="/SignUp" className='header-links'>
                        <div className='link-box'>
                            Sign Up
                        </div>
                    </a>
                    <a className='header-links' href="/">
                        <div className='link-box'>
                            Home
                        </div>
                    </a>
                    <a className='header-links' href="/SignIn">
                        <div className='link-box'>
                            Sign In
                        </div>
                    </a>
                </div>
            )
        }
    }

    return (
        <div className='header'>
            <div className='header-container'>

            </div>
            {renderRightButtons()}
            <div className='header-container'>

            </div>
        </div>
    )
}

export default Header
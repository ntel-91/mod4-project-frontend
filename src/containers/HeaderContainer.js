import React, { Component } from 'react'
import LoginForm from '../components/LoginForm.js'
import HamsterHeader from '../components/HamsterHeader.js'
import { Link } from 'react-router-dom'


class HeaderContainer extends React.Component {

    render() {   
        return (
            <div className="header">
                <h2 id="logo" >Ebay for Hamsters</h2>
            </div>
        )
    }
}

export default HeaderContainer
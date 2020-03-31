import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {

    renderCartNumber = () => {
        return `(${this.props.cart.length})`
    }

    render() {
        return (
            <div id="login" class='user-options'>
                Welcome, {this.props.hamster} 
                {" | "}
                <Link to='/cart'>View Cart {this.renderCartNumber()}</Link>
                {" | "}
                <button onClick={this.props.logout}>logout</button>
            </div>
        )
    }
}

export default Header
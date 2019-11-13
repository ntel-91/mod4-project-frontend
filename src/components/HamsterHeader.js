import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HamsterHeader extends React.Component {

    renderCartNumber = () => {
        return `(${this.props.cart.length})`
    }

    render() {
        return (
            <div id="login" >
                Welcome, {this.props.hamster} 
                {" | "}
                <Link to='/cart'>View Cart {this.renderCartNumber()}</Link>
                {" | "}
                <button onClick={this.props.logout}>logout</button>
            </div>
        )
    }
}

export default HamsterHeader
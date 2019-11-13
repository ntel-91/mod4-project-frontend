import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Cart extends React.Component {

    renderItems = (items) => {
        return items.map((item) => {
            return (
                <p>{item.name}{": "}{item.price} </p>
            )
        })
    }

    renderTotal = (items) => {
        if (items.length === 1) {
            return `$${items[0].price}`
        } else if (items.length !== 0) {
            return items.reduce((acc, cv) => {
                return acc.price + cv.price
            })
        }
    }

    renderCart = () => {

    }

    render() {
        return (
            <div>
                <p><Link to='/products'>Continue Shopping</Link></p>
                <h1>Your Cart!</h1>
                {this.renderItems(this.props.cartItems)}
                <h5> { this.props.cartItems.length !== 0 ? `Total: $${this.renderTotal(this.props.cartItems)}` : null} </h5>
                <button onClick={this.props.submitOrder}>Submit Order</button>
            </div>

        )
    }
}

export default Cart
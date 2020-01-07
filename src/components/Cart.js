import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Cart extends React.Component {
   
    renderItems = (items) => {
        return items.map((item) => {
            return (   
                <p>{item.name}{": $"}{item.price} </p>
            )
        })
    }

    renderTotal = (items) => {

        const priceArray = items.map((item) => {
            return item.price
        })

        if (items.length === 1) {
            return `${items[0].price}`
        } else if (items.length !== 0) {
            return priceArray.reduce((acc, cv) => {
                return acc + cv
            }, 0)
        }
    }

    renderPrevPurches = (items) => {
        return items.map((item) => {
            return (
                <div>
                    {item.name}
                </div>
            )
        })    
    }

    render() {
        return (
            <div>
                <div>
                    <p><Link to='/products'>Continue Shopping</Link></p>
                    <h3>{ this.props.cartItems.length !== 0 ? "Your Cart!" : "Your Cart is Empty :-("}</h3>
                    {this.renderItems(this.props.cartItems)}
                    <h5> { this.props.cartItems.length !== 0 ? `Cart Total: $${this.renderTotal(this.props.cartItems)}` : null} </h5>
                    <button onClick={this.props.submitOrder}>Submit Order</button>
                </div>

                <div>
                    <h3>Previous Purchased:</h3>
                    <div className="prev-purch-header">
                        {this.renderPrevPurches(this.props.prevPurchases)}
                    </div>
                </div>
            </div>

        )
    }
}

export default Cart
import React, { Component } from 'react'
import '../css/item.css'

class Item extends React.Component {
    
    inCart = (item) => {    
        if (this.props.cart.length !== 0) {    
            return this.props.cart.includes(item)
        } {
            return false
        }
    }

    state = {
        disabled: this.inCart(this.props.item)
    }

    add = (item) => {
        this.props.addToCart(item)
        this.setState({
            disabled: true
        })
    }
    
    render() {

        return (
            <div className="item">
                <h5>{`${this.props.item.name}, Price: $${this.props.item.price}`} <button disabled={this.state.disabled} onClick={() => this.add(this.props.item)}>add to cart</button></h5>
            </div>
        )
    }
}

export default Item
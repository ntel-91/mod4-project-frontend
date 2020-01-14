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
        console.log(this.props.item)
        return (
            <div className="item">
                <div className='item-contents'>
                    <div className='content'>
                        <h5>{`${this.props.item.name}`}</h5>
                    </div>
                    <div className='content'>
                        <h5>Price: ${this.props.item.price}</h5>
                    </div>
                    <div className='content'>
                        <button disabled={this.state.disabled} onClick={() => this.add(this.props.item)}>add to cart</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item
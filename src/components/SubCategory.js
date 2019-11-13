import React, { Component } from 'react'
import Item from './Item.js'
import '../css/subcategory.css'

class SubCategory extends React.Component {
    

    state = {
        toggled: false
    }

    handleClick = () => {
        this.setState({
            toggled: !this.state.toggled
        })
    }

    renderItems = (items) => {
        return items.map((item) => {    
            return (
                <div>
                    { item.hamster_id ? null : (this.state.toggled === true ? <Item item={item} cart={this.props.cart} addToCart={this.props.addToCart}/> : null) }
                </div>
            )
        })
    }
    
    render() {
        
        return (
            <div>
                <h3 className="subcategory-header" onClick={this.handleClick}>{this.props.subCategory.name} </h3>
                {this.renderItems(this.props.subCategory.items)}
            </div>
        )
    }
}

export default SubCategory
import React, { Component } from 'react'
import Category from '../components/Category.js'
import '../css/category.css';


// import { Card } from 'semantic-ui-react'

class ItemContainer extends Component  {


    renderCategories = (categories) => {
        return categories.map((category) => {
            return ( 
                <div className="items" key={category.id}>
                    <Category category={category} cart={this.props.cart} addToCart={this.props.addToCart} />
                </div>               
            )
        })
    }

    render() {
        
        return (
            <div className="category-box">
                <h1>Shop by:</h1>

                {this.renderCategories(this.props.categories)}
            </div>
        )
    }
}

export default ItemContainer
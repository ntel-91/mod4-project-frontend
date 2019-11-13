import React, { Component } from 'react'
import Category from '../components/Category.js'


// import { Card } from 'semantic-ui-react'

class ItemContainer extends Component  {

    state = {

    }

    renderCategories = (categories) => {
        return categories.map((category) => {        
            return (       
                <div className="items">
                    <Category category={category} cart={this.props.cart} addToCart={this.props.addToCart}/>
                </div>               
            )
        })
    }

    render() {
        
        return (
            <div>
                {this.renderCategories(this.props.categories)}
            </div>
        )
    }
}

export default ItemContainer
import React, { Component } from 'react'
import SubCategory from './SubCategory.js'
import '../css/category.css';

class Category extends React.Component {
    
    state = {
        toggled: false

    }

    handleClick = () => {
        this.setState({
            toggled: !this.state.toggled
        })
    }

    renderSubCategories = (subCategories) => {
        return (
            
            subCategories.map((subcategory) => {    
                return (
                    <div key={subcategory.id}>
                        {this.state.toggled === true ? <SubCategory subCategory={subcategory} cart={this.props.cart} addToCart={this.props.addToCart}/> : null}
                    </div>
                )
            })
        )
    }
    
    render() {    
        return (
            <div className="category">
                <h2 className="category-header" onClick={this.handleClick} >{this.props.category.category_name}</h2>
                {/* <div className="subcategory-container"> */}
                    {this.renderSubCategories(this.props.category.sub_categories)}
                {/* </div> */}
            </div>
        )
    }
}

export default Category
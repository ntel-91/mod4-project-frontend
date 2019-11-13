import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class CreateAccount extends React.Component {
 
    state = {
        name: "",
        username: "",
        redirect: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value    
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createAccount(this.state.name, this.state.username)
        this.setState({
            redirect: !this.state.redirect
        })
    }

    render(){
        
        return (
             
            <div>
                { this.state.redirect ? <Redirect to="/products"/> : null }
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Enter a name" onChange={this.handleChange} name="name" value={this.state.name}/>
                    <input placeholder="Enter a username" name="username" onChange={this.handleChange} value={this.state.username}/>
                    <input type="submit" value="Create" />
                </form>
            </div>
        )
    }
}

export default CreateAccount
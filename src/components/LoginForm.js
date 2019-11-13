import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class LoginForm extends React.Component {

    state = {
        input: "",
        hamsters: [],
        redirect: false
    }

    handleChange = (e) => {    
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let hamster = this.loginTrue(this.state.input)
        if (hamster) {
            this.props.handleLogin(hamster)
        } else {
            return false
        }
        this.setState({
            redirect: true
        }, console.log(this.state.redirect))
    }

    loginTrue = (username) => {
        return this.state.hamsters.find((hamster) => {
            return hamster.username === username
        })
    }

    componentDidMount() {
        fetch('http://localhost:3000/hamsters')
        .then(res => res.json())
        .then(data => {
            this.setState({
                hamsters: data
            })
        })
    }
    
    render() { 
        
        return (
            <div>
                { this.state.redirect ? <Redirect to="/products"/> : null }
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Enter a username..." onChange={this.handleChange} value={this.state.input}/>
                    <input type="submit" value="Login" />
                </form>
                
            </div>
        )
    }
}

export default LoginForm
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
 
    return (
        <div className="welcome">
            <h1>Welcome</h1>
            <div>
                <Link to='/login'>Login</Link> 
                {" or "}
                <Link to='/create'>create account</Link>
            </div>
        </div>
    )
}

export default Welcome
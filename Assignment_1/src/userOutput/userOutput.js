import React from 'react';
import './userOutput.css';

const UserOutput = (props) => {
    return(
        <div className="card">
            <p>Hi, I am {props.username}</p>
            <p>I desire to learn and build projects in React</p>
        </div>
    )
}

export default UserOutput;
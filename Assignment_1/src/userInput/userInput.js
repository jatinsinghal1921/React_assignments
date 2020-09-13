import React from 'react';

const UserInput = (props) => {
    const style = {
        margin: "15px 5px 5px 15px"
    }

    return(
        <div style={style}>
            <label for="name">Update Name </label>
            <input type="text" id="name" onChange={props.changeName} value={props.username}/>
        </div>
    )
}

export default UserInput;
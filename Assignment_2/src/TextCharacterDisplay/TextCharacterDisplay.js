import React from 'react';
import './TextCharacterDisplay.css';


const TextCharacterDisplay = (props) => {
    return(
        <div className='character' onClick={props.deleteChar}>{props.character}</div>
    )
}

export default TextCharacterDisplay;
import React from 'react';

const TextSizeValidation = (props) => {
    
    let InputNameLengthStatus;
    if(props.length < 5)
    {
        InputNameLengthStatus = (<p>Text Too Short</p>);
    }
    else if(props.length === 5)
    {
        InputNameLengthStatus = (<p> Text is of proper Length</p>);
    }
    else{
        InputNameLengthStatus = (<p> Text long enough</p>);
    }

    return(
        <div>
            {InputNameLengthStatus}
        </div>
    )
} 

export default TextSizeValidation;
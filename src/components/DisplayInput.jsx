import React from 'react';

const DisplayInput = (props) => {
    return(isNaN(props.input) ? 
    <div>The word is: {props.input}</div> : 
    <div>The number is: {props.input}</div>
)};

export default DisplayInput;
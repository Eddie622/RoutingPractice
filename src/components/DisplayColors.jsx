import React from 'react';

const DisplayColors = (props) => {
    return(isNaN(props.input) ? 
    <div style={{color: props.colorOne, backgroundColor: props.colorTwo}}>The word is: {props.input}</div> : 
    <div style={{color: props.colorOne, backgroundColor: props.colorTwo}}>The number is: {props.input}</div>
)};

export default DisplayColors;
// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe() {
    function handleFocus(event){
        console.log('Good!');
    }
    function handleBlur(event){
        console.log("Hey! Eyes on me!");
    }
    return(
       <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button> 
    )
}

export default EyesOnMe;
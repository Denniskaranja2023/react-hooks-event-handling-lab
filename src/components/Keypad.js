// Code Keypad Component Here
import React from 'react';

function Keypad (){
    function handleChange(event) {
        event.preventDefault();
        console.log("Entering password...", event.target.value);
    };

    return (
        <div>
            <input type="password" onChange={handleChange} />
        </div>
    )
}

export default Keypad;
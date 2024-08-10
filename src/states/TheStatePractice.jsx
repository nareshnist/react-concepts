import { useState } from "react";
export function BackGroundColorChange(){

    const [color, colorChange] = useState("#fff");
    function handleChange(colorinput){
        document.body.style.backgroundColor = colorinput.target.value;
        colorChange( colorinput.target.value)
    }

    return (
        <>
            <h1>BackGround color  : {color}</h1>
            <input type="color" id="favcolor" name="favcolor" value={color} onChange={handleChange} /> 
        </>
    )

}
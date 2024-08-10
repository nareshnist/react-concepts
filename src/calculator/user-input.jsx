import { useState } from "react";
import { KeyPad } from "./keypad";
import './user-input.css'


export function Calculator(props) {

    const [input ,setInput] = useState("")

    const handleClick = (value) => {
        setInput(() => input + value);
    }

    const handleClear = () => {
        setInput(() =>"");
    }

    const  finalResult = () => {
        setInput(() => eval(input));
    }


    return(
        <div className="container m-0">
            <header>
                <h1>Calculator app using app</h1>
            </header>
            <div className="calculator">
                    <input type="text" className="output"  value={input}  readOnly/>
                    <KeyPad onOperatorClick={handleClick} clear={handleClear} finalResult={finalResult} ></KeyPad>
                </div>
        </div>
    )
}
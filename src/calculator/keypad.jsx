import './Keypad.css';

export function KeyPad({onOperatorClick,clear,finalResult}){

    const handleClick = (value) => {
        onOperatorClick(value)
    }


    return(
        <div className="key-pad">
            <div className="row m-0">
                 <button onClick={() => {handleClick("7")}} className="digit" type='button'>7</button>
                 <button onClick={() => {handleClick("8")}} className="digit" type='button'>8</button>
                 <button onClick={() => handleClick("9")} className="digit" type='button'>9</button>
                 <button onClick={() => handleClick("/")} className="operator" type='button'>/</button>
            </div>
            <div className="row m-0">
                 <button onClick={() => handleClick("4")} className="digit" type='button'>4</button>
                 <button onClick={() => handleClick("5")} className="digit" type='button'>5</button>
                 <button onClick={() => handleClick("6")} className="digit" type='button'>6</button>
                 <button onClick={() => handleClick("*")} className="operator" type='button'>*</button>
            </div>
            <div className="row m-0">
                 <button onClick={() => handleClick("1")} className="digit" type='button'>1</button>
                 <button onClick={() => handleClick("2")} className="digit" type='button'>2</button>
                 <button onClick={() => handleClick("3")} className="digit" type='button'>3</button>
                 <button onClick={() => handleClick("-")} className="operator" type='button'> -</button>
            </div>
            <div className="row m-0">
                 <button onClick={() => handleClick("0")} className="digit" type='button'>0</button>
                 <button onClick={() => finalResult()} className="fun-key" type='button'>=</button>
                 <button onClick={() => clear()} className="fun-key" type='button'>C</button>
                 <button onClick={() => handleClick("+")} className="operator" type='button'>+</button>
            </div>
        </div>
    )

}
import { useState } from "react";

export function VirtualDom(){

    const [counter,setCounter] = useState(0)

    const handleClick  = () => {
        setCounter( pre => pre + 1 );
    }

    const array = [1,2,3,4,5,6,7,8,9,10,11,12]
;    return (
        <>
        
        <button type="button" onClick={handleClick}>Increment</button>
        <h1>{counter}</h1>
        <ul>{array.map((item) => <li key={item}>{item}</li>)}</ul>
        </>
    )
}


// before updadating

// after updating


// use diff algorithm & comprare and update the dom
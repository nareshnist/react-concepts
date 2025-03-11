

import { useCallback, useState } from "react";

import {UseCallBackChild} from './useCallBackChild';

export  function UseCallBackParent() {

    const [count, setCount] = useState(0);

    // Function defined inside the component

    const handleClick = useCallback(() => {
        setCount(count => count + 1); 
    },[count])


    return (
        <div>
                <p>Count : {count}</p>
                <UseCallBackChild onClick={handleClick}></UseCallBackChild>
        </div>
    )
}


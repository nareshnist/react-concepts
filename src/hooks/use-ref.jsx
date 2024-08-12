import { useRef } from "react";
import './use-ref.css';




export function UseRefHook() {

    const ele = useRef(null);
    const multiple = useRef([]);


    const handleClick = (ele) => {
        for (let currentEle of multiple.current) {
            currentEle.classList.remove('active');
        }
        ele.target.classList.add("active");
    }


    return (
        <>

        {/* exmaple for single element */}
            <h1 ref={ele}>Use ref hook</h1>
            <button type="button" onClick={(e) => {
                console.log(ele);
                ele.current.innerHTML = 'changes';
            }}>GetElement</button>

            <button type="button" onClick={(e) => {
                console.log(ele);
            }}>get updated element</button>


            {/* using multiple elements */}

            {
                [1,2,3,4,5,6,7,8].map((ele ,index) => {
                    return(
                        <h1 ref={(ele) => multiple.current[index] = ele} key={index} onClick={(ele) => {
                            console.log(ele);
                            handleClick(ele);
                        }}>Heading {index + 1}</h1>
                    )
                })
            }
        </>
    )
}



// use ref help us to access the dom
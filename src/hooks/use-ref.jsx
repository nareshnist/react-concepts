// import { useRef } from "react";
// import './use-ref.css';


import { useEffect, useRef, useState } from "react";



// export function UseRefHook() {

//     const ele = useRef(null);
//     const multiple = useRef([]);

//     const handleClick = (ele) => {
//         for (let currentEle of multiple.current) {
//             currentEle.classList.remove('active');
//         }
//         ele.target.classList.add("active");
//     }

//     return (
//         <>

//         {/* exmaple for single element */}
//             <h1 ref={ele}>Use ref hook</h1>
//             <button type="button" onClick={(e) => {
//                 console.log(ele);
//                 ele.current.innerHTML = 'changes';
//             }}>GetElement</button>

//             <button type="button" onClick={(e) => {
//                 console.log(ele);
//             }}>get updated element</button>


//             {/* using multiple elements */}

//             {
//                 [1,2,3,4,5,6,7,8].map((ele ,index) => {
//                     return(
//                         <h1 ref={(ele) => multiple.current[index] = ele} key={index} onClick={(ele) => {
//                             console.log(ele);
//                             handleClick(ele);
//                         }}>Heading {index + 1}</h1>
//                     )
//                 })
//             }
//         </>
//     )
// }



// use ref help us to access the dom


// use ref 




export function UseRefHook () {


    // 1. Accessing DOM Elements

    // const inputRef = useRef(null);
    // //  which returns the object {current:value }

    // const handleClick = () => {
    //     console.log("handle click ......")
    //     inputRef.current.focus();
    // }

    // return(

    //     <>
    //         <h1>use ref hook</h1>
    //         <input type="text" name="username" id="username" ref={inputRef} />

    //         <button type="button" onClick={handleClick}> Onclick</button>
    //     </>
    // )



// 2. Persisting Values Without Re-renders
// Unlike useState, updating a useRef value does not trigger a component re-render.

    // const countRef = useRef(0);
    // const [stateCount, setStateCount] = useState(0);

    // const incrementRef  = () => {
    //     countRef.current += 1; // Updates but does not cause re-render
    //     console.log("Ref Count:", countRef.current);
    //     console.log(countRef)
    // }

    // useEffect(() => {
    //     console.log("triggeref re-rendering")
    // })

    // const incrementState = () => {
    //     setStateCount(stateCount + 1); // Causes re-render
    // }

    // return (
    //     <>
        
    //     <p>State Count: {stateCount}</p>


    //         <button onClick={incrementState}>Increment State</button>
    //     <button onClick={incrementRef}>Increment Ref</button>
    //     </>
    // )


// 3. Storing Previous State Values
// useRef can be used to store the previous state value between renders

//     const [count ,setCount] = useState(0);
//     const previousCount = useRef(0);

//     useEffect(() => {
//         debugger
//         previousCount.current = count;
//     },[count])

// return (

//     <>
//         <p>Current Count : {count}</p>
//         <p> Previous Count : {previousCount.current}</p>

//         <button type="button" onClick={() => setCount(count => count + 1)}>Increament</button>
//     </>    
// )

}








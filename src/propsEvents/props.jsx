

// example 1

import { useState } from "react"

// export function Parent(){

//     const handleData = (data) => {
//         console.log("Data from child component.");
//         console.log(data);
//     }
//     return (
//         <>  
//             <h1>
//                 Parent component
//             </h1>
//             <Child  xyz={handleData} />
//         </>
//     )
// }

// function Child({xyz}){

//     const handleData = (data)=> {
//         xyz(data)
//     }
//     return (
//         <>
//             <h1>Child Component</h1>

//             <button type="button" onClick={() => {
//                 handleData('naresh')
//             }}>GetData</button>
//         </>
//     )
// }



// passing data from child to parent
    // stpe 1 create function in parent
    // pass function to child as props
    // stpe 2 provide child data to function as param in child componnet..



// example 2 
export function Parent() {
    let [list, setList] = useState([
    ]);

    const additems = (item) => {
        let data = [...list];
        data.push(item);
        console.log(data);
        setList(data);
    }

    return (
        <>
         <Child addItem={additems}></Child>
            {list.length > 0 && (
                <ol >
                {
                    list.map((item) => <li key={item}>{item}</li>)
                }
            </ol>
            )}
           
        </>
    )

}

function Child({ addItem }) {
    const [inputText, setinputText] = useState("")

    return (
        <>
            <input type="text" value={inputText} onChange={(e) => {
                setinputText(e.target.value);
            }} />
            <button type="button" onClick={() => {
                debugger;
                addItem(inputText);
                setinputText("");
            }}>Add item</button>
        </>
    )
}


import { useContext } from "react"
import { context } from "./props-dril"

export function Prodcut(props){

    // to use the context by using the usecontexthook

    const perosnData  = useContext(context);
    console.log("===== use context area  start====== ");
    console.log(perosnData);
    console.log("===== use context area  end====== ");

    console.log(props)

    return (
        <>
        
        <h1>Product Component</h1>
        <h1>{JSON.stringify()}</h1>
        </>
    
    )
}
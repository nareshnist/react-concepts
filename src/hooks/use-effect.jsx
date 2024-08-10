import { useEffect,useState } from "react";
import { ProductList } from "./use-effect-example";


export function UseEffectHook(){

    let [timer,setTimer] = useState(0);
    let [counter ,setCounter] = useState(0);
    
    // ex 1 all the when ever state variable change
    // useEffect(() => {
    //     console.log("in side use effect");
    // });

    // only one time on load
    //  useEffect(() => {
    //     console.log("in side use effect");
    // },[]);

     // dependiec change re execute it
    //  useEffect(() => {
    //     console.log("in side use effect");
    // },[counter]);

    return (
      <>
        {/* <button type="button" onClick={() => {
            setTimer((prev) => prev + 1);
        }}> UpdateTimer</button>

        <button type="button" onClick={() => {
            setCounter((prev) => prev + 1);
        }}> update counter</button>

        <h1>Demo of use effect {console.log("inside component")} </h1>
        <h2>{timer}</h2> */}

        <ProductList></ProductList>
      </>
    );
}



// from version 16 


// use cases : 
    // api call  get data & construct jsx
    // after component load  do  some dom manupulation or adding event listed ,


// Syntax
// useEffect(callback,[dependencies(optinal)])

// how its works :

    // useEffect(callback) :
        // useEffect(() => {cosnole.log(console.log("use effect"))})
        // when second params not provided when ever any state variable changs component will re-render so useEffect will execute.

    // empty :
        //useEffect(callBack, [empty dependencies]) 
        // call back with empty dependencies only execute on mount (only one time).

    // specifix dependencies :
        //useEffect(callBack, [dependencies])
            // onload 
            // anytime its dependencies re execute
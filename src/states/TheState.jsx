
import { useState } from "react";
import React from "react";


//functional component
export function StateHandle(){
    let [counter,updateCounter] = useState(0); // initial value
    let [productname,updateProductName] = useState("one plus nord 2.");
    const [product,updateProductObject] = useState({
        name:"air buds pro 2",
        price:10000
    });


    // if you have more variable componnet as componnet grows it won't looks good so we can pass as object 

    setTimeout(() => {
        updateProductName('air budes pro 2');
    }, 5000);

    // return [value,funtiontoupdatethe value]

    function updateConter(){
        // updateCounter(++counter)// one way
        updateCounter(() => 10);


        // UPDATING OBJECT
        updateProductObject({
            name:"mac1",
            price:10000
        });

        updateProductObject({
            ...product, // short hand for above and updating required proprties below.
            price:1010101010
        });





    }

    return (
        <>
            <h1>Counter value :{counter}</h1>
            <h1>{productname}</h1>

            <p>{product.name} {product.price}</p>
            <p>{JSON.stringify(product)}</p>

            <button type="button" onClick={updateConter}>Change</button>
        </>
    )
}




// export class StateHandle extends React.Component {

//     constructor() {
//         super()
//         console.log(this);
//         console.log(this.setState); // proto type object
//         this.updateState = this.updateState.bind(this);
//     }

//     // reactive object in react built componnet we are inheriting.
//     state = {
//         counter: 0
//     }

//     render() {
//         return (
//             <>
//                 <h1>Counter value :{this.state.counter}</h1>
//                 <button type="button" onClick={
//                 //     () => {
//                 //     this.setState({ counter: this.state.counter + 1 })
//                 // }
//                 this.updateState
//                 }>
//                     Change
//                 </button>
//             </>
//         )
//     }


//     // when we call as function as methode we need to bind with this in constructor
//     updateState(){
//         this.setState({ counter: this.state.counter + 1 },() => {
//         console.log(this.state.counter);
//         });  // it is an async call 
//         //console.log(this.state.counter);// print the old value
//     }
// }

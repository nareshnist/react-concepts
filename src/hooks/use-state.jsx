import { useState } from "react"



function username(){
    console.log("every time this could execute")
    return 'Naresh'
}

export default function UseStateHook(){

    const [count, setCount] = useState(0);

    // const [state, setState] = useState(() => {
    //     console.log("executed only once at initial load");
    //     return 'nani'+'naresh'
    // });

    // const [userNmae, setUsername] = useState(username());

    const [password, setPassword] = useState({password:'zyz',newPassword:'hh'});


    function decrementCount() {

        // setCount(count + 1);
        setCount(previousCount => previousCount - 1); 
        // based on previous state 
        // right way to do it
    }


    function incrementCount(){
        setCount(previous  => previous + 1);

        // setPassword(previewPassowrd => {
        //     return {previewPassowrd:'naresh nani'}
        // });  with this we would be losing the properties apart from it 

        // right way to do it is 

          setPassword(previousPassword => {

            return {
                ...previousPassword,
                newPassword:'hhhhhhhh'
            }
          });
          console.log(password)
    }

    return (
        <>
            <h1>React use state hook</h1>
            <button type="button" className="btn btn-danger" onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button type="button" className="btn btn-primary" onClick={incrementCount}>+</button>
        </>
    )
}



/**
 * 
 *  what is react hook ? 
 *      - state
 *          - State is a built-in object in React that allows components to store and manage data that can change over time.
 *      
 * Now, here are some additional things to know about useState before moving on: 
 *      - useState Doesn't Merge State Automatically (Unlike Class Components)
 *          - this.setState({ name: "Naresh" });  // Keeps other state properties intact.
*       - But in useState, it replaces the entire state if you don’t spread the previous state:
 *          - const [user, setUser] = useState({ name: "Naresh", age: 25 });
 *          - setUser({ age: 26 });  // ❌ This removes `name`
 *      - Correct way (merge manually):
 *          - setUser(prevUser => ({ ...prevUser, age: 26 }));
 *  
 *
 * 2️⃣ State Updates May Be Asynchronous : 
 *  React batches state updates for performance. If you update the state multiple times in a single event,
 *  only the last one might take effect unless you use a function.
 * ❌ Problem: Stale State 
 * 
* <button onClick={() => {
    setCount(count + 1);
    setCount(count + 1);
    }}>Increase</button>
    👉 This only increments by 1, not 2, because count doesn’t update immediately.

    ✅ Solution: Functional Update
        <button onClick={() => {
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        }}>Increase</button>
        👉 Now it correctly increments by 2.

    3️⃣ Initial State Function Optimization
        If the initial state is computed, use a function to avoid recalculating on every render.
            ❌ Recalculates on every render:
                const [count, setCount] = useState(expensiveCalculation());
            ✅ Optimized with function (runs only once) :
                const [count, setCount] = useState(() => expensiveCalculation());
                👉 This ensures expensiveCalculation() runs only once (on mount).
    4️⃣ State Updates Do Not Always Trigger Re-renders
        React compares the previous state with the new state. If they are equal, React skips the re-render.
            const [count, setCount] = useState(0);
            <button onClick={() => setCount(0)}>Set to 0</button>  // No re-render!
            👉 Clicking the button won't re-render because the state is already 0.

 */



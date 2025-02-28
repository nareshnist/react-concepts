
import React, { useReducer } from 'react'

// basic example
// const reducer = (state,action) =>{
//     switch(action.type){
//         case "increment":
//             return {count:state.count + 1}
//         case "decrement":
//             return {count:state.count - 1}
//         case 'reset':
//             return {count:0}
//     }
// }


const reducer = (state , action) => {
    switch (action.type) {
        case 'SET_NAME' : 
            return {...state,name: action.payload}
        case 'SET_EMAIL' : 
            return {...state,email: action.payload}
        case 'RESET' :
             return {name:'',email:''}
        default : 
            return state;
    }
}    

export  function UseReducerHook() {


// basic exmaple

// when handling multiple related state updates.

//     const [state, dispach] = useReducer(reducer, {count:0});

//     const  handleIncrement = () => {
//         dispach({type:"increment"})
//     }
//     const handleDecrement = () => {
//         dispach({type:"decrement"})
//     }
//     const handleReset  = () => {
//         dispach({type:"reset"})
//     }
//   return (
//     <div>
//         <p>the counter valueb is   {state.count}</p>
//       <button type="button" onClick={handleIncrement}>Increament</button>
//       <button type="button" onClick={handleDecrement}>Decreament</button>
//       <button type="button" onClick={handleReset}>Reset</button>
//     </div>
//   )


const [state , dispatch] = useReducer(reducer, {name:'',email:''});



return (
    <>
        <div>
      <h2>Form</h2>
      <input
        type="text"
        placeholder="Name"
        value={state.name}
        onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={state.email}
        onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
      />
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
    </div>
    
    </>
)
}

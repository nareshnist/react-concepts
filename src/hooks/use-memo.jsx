// import { useEffect, useMemo, useState } from "react";

// export function UseMemo() {

//     const [timer, setTimer] = useState(new Date().toLocaleTimeString());
//     const [seaechText, setSseaechText] = useState("");

//     const [products, setProdcts] = useState(
//         [
//             {
//                 id: 1,
//                 name: "apple",
//                 price: 123
//             },
//             {
//                 id: 2,
//                 name: "red me",
//                 price: 1234
//             },
//             {
//                 id: 3,
//                 name: "real me",
//                 price: 123456
//             },
//         ]
//     );
//     const filterdProducts = (seachText) => {
//         console.log(seachText);
//         return [...products].filter((p) => p.name.toLowerCase().includes(seachText));
//     }

//     useEffect(() => {
//         setInterval(() => {
//             // console.log("re render")
//             setTimer(new Date().toLocaleTimeString());
//         }, 1000);
//     })

//     let productsAfterSearch = useMemo(() => {
//         return filterdProducts(seaechText);
//     }, [seaechText, products])



//     return (
//         <>
//             <h2>Tomer : {timer}</h2>
//             <input type="text" value={seaechText} onChange={
//                 (e) => {
//                     setSseaechText(() => e.target.value);
//                 }
//             } />
//             <table>
//                 <thead>
//                     <tr>
//                         <th>S.NO</th>
//                         <th>Name</th>
//                         <th>Price</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         productsAfterSearch.map((res, idx) => {
//                             return (
//                                     <tr key={res.id} id={res.name}>
//                                         <td >{res.id}</td>
//                                         <td >{res.name}</td>
//                                         <td >{res.price}</td>
//                                     </tr>
//                             )
//                         })
//                     }
//                 </tbody>

//             </table>
//         </>
//     )
// }



// What is useMemo?
// useMemo is a React hook that helps speed up your app by remembering (memoizing) a value so it doesn’t have to be recalculated every time the component re-renders.

// Simple Example:
// Imagine you have a function that takes time to run. Without useMemo, React will call this function every time the component updates. With useMemo, React remembers the result and only recalculates it if needed.

import React, { useMemo, useState } from "react";

export const UseMemo = () => {

    // without usememo
    // const [count,setCount]= useState(0);
    // const [number,setNumber]= useState(0);

    // const doubleNumber = () => {
    //     console.log("calculating")
    //     return number * 2;
    // }
    
    // return (
    //     <>
    //         <input type="number" name="username" onChange={(event) => setNumber(+event.target.value)} />

    //         <p>Double Number : {doubleNumber()}</p>

    //         <button type="button" onClick={() => setCount(count => count + 1)}>re-render</button>
    //     </>
    // )


    // with useMemo

//     const [number, setNumber] = useState(0);
//   const [count, setCount] = useState(0);

//   const doubleNumber = useMemo(() => {
//     console.log("Calculating...");  // Runs ONLY when 'number' changes
//     return number * 2;
//   }, [number]);

//   return (
//     <div>
//       <input 
//         type="number" 
//         value={number} 
//         onChange={(e) => setNumber(parseInt(e.target.value))}
//       />
//       <p>Double: {doubleNumber}</p>
//       <button onClick={() => setCount(count + 1)}>Re-render</button>
//     </div>
//   );


// const [theme, setTheme] = useState(false)

// const themeObject = {
//     color :  theme ? 'black' : '#fff',
//     backgroundColor: theme ? '#fff' : 'black'
// }
// console.log("Theme object created!");
// console.log(themeObject)


// return (
//     <div style={themeObject}>
//         <p>Lorem ipsum dolor sit amet.</p>
//         <button type="button" onClick={() => setTheme(!theme)}>re-redder</button>
//     </div>
// )

const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(() => {
    console.log("Theme object created!");
    return {
      backgroundColor: darkMode ? "#333" : "#fff",
      color: darkMode ? "#fff" : "#000",
    };
  }, [darkMode]);

  return (
    <div style={theme}>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
      <p>Hello, this is a themed text!</p>
    </div>
  );
};






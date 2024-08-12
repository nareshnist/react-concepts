
import { useState,useEffect } from "react";

export function useCustomeHook () {

    const [product ,setProduct] = useState({});
    useEffect(() => {
        getData();
    },[]);

    const  getData = async () => {
        const data = await fetch("https://fakestoreapi.com/products/1");
        const finalData = await data.json();
        setProduct(finalData);
    }
    return product;
}


// inside utils ,helpers 

//use case's re usable logic like common api service. 
// dry don't repeat yourself

// search in holiday 

// Custom Hook for Debouncing User Input
// 2. Custom Hook for Window Resize Handling
// Using the Custom Form Hook




// api call , form validation

// chat gpt example

// import { useState, useEffect } from 'react';

// function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return { data, loading, error };
// }

// export default useFetch;

import { createContext } from "react";
import { ProductList } from "./product-list";



export function Home({name,age}){
    return (
       <>
        <h1>Home Component</h1>
        <ProductList name={name} age={age}></ProductList>
       </>
    )
}
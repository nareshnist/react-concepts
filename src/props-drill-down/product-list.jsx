import { Prodcut } from "./product"
export function ProductList({name,age}){
    return (
                <>
                    <h1>ProductList Component</h1>
                    <Prodcut name={name} age={age}></Prodcut>
                </>
    )
}
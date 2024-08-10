
import { Product } from "./porduct"
export function ProductList(){

    const product = {
        a:10,b:20,c:30,d:40,e:5
    }

    return(
        <Product name ="'Apple Pro 2'" {...product} />
    )
}
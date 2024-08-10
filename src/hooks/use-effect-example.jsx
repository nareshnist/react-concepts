

// using fakestoreapi end point

import { useEffect, useState } from "react";
import './use-effect-exmaple.css';


export function ProductList(){

    let [products, setProducts] = useState([]);

    useEffect(() => {
       const data =  getProducts();
       setProducts(data);
    },[]);
    
    const getProducts  = async () => {
        const products = await fetch('https://fakestoreapi.com/products');
        const data  = await products.json();
        setProducts(data);
        console.log(data)
    }

    if(!products.length)
        return <h1>Fetching data</h1>;

    return( 
        <>
            <h1>Product lIST</h1>
            <div className="product-list">
            {
                products.map((product, index) => <ProductCard {...product} key={product.id}></ProductCard>)
            }
            </div>
        </>
    )
}



function ProductCard({image,title,description,price}) {

return (
    <>
    <div className="card">
    <img src={image} alt="Avatar" style={{width:'100%'}} />
    <div className="container">
        <h4><b>John Doe</b></h4>
        <p>{title}</p>
        <p>{description}</p>
        <p> Price : {price}</p>
    </div>
    </div>
    
    </>
)
}
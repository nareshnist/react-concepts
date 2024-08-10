import { useState } from 'react'
import './TheCounter.css'

export function CounterExample() {

    const [count,updateCount]  = useState(0);
    const stock = 10;

    const adding = () => {
        if(count < stock) {
            updateCount(count + 1);
        }
      
    }
    const reducing = () => {
        if(count) {
            updateCount(count - 1)
        }
    }

    return (
        <>
            <button className="mins" onClick={reducing} disabled={count ? false : true}>-</button>
            <span className='content'>{count}</span>
            <button className="plus" onClick={adding} disabled ={count < stock ? false : true} >+</button>
        </>

    )
}
import {Home} from './home';
import { createContext } from 'react';


export const context = createContext();

export function ProspDrill(){

    const perosn = {
        name:"Naresh",
        age:26
    }
    console.log(context);
    return (

        <>
        <h1>ProspDrill main Component</h1>
        <context.Provider value={perosn}>
            {/* <Home {...perosn}></Home> */}

            <Home></Home> 
        </context.Provider>
        </>
    )
}

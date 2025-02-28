// create context
// providerfunction
// custom component
// custom hook

import { Andhra } from "./useContext/Andhra";

import { MyProvider } from "./useContext/myContext";

export function UseContextHook (){

    return (

        <MyProvider>
             <Andhra />
        </MyProvider>
       
    )
}

import {useCustomeHook} from './custom-hook';

export function TestCustomeHook(){

    const product = useCustomeHook()
    return(
        <h1>{JSON.stringify(product)}</h1>
    )
}
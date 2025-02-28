

import { dataFromContxt } from "./myContext"
export function Hyd() {
    const {user} = dataFromContxt()
    return (
        <>
  <p>          Hyd : {dataFromContxt}</p>

        </>
    )
}
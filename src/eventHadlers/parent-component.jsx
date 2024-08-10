
   
import {Button} from './child-component';

// passing props

// export function BaseComponnet (){
//     return (
//         <>
//         <Button message="Playing!"> Play Movie</Button>
//         <Button message="Uploading!"> Upload Image</Button>
//         </>
//     )
// }

// import { PlayButton,UploadButton } from './child-component';

// passing events as props

// export function BaseComponnet (){
//         return (
//             <>
//             <PlayButton movieName="Playing!"> Play Movie</PlayButton>
//             <UploadButton> </UploadButton>
//             </>
//         )
//     }


// Naming event handler props  

import {ButtonContainer} from './child-component'

export function BaseComponnet (){
        return (
            <>
                <ButtonContainer />
            </>
        )
    }
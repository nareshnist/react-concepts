import { useEffect, useId, useLayoutEffect, useRef ,useState} from "react"



// export  function UseLayoutEffect() {

//     const headingElement  = useRef();
//     const [isVisible, setIsVisible] = useState(false);
//     const popUpref = useRef()

//     useEffect(() => {
//         if(popUpref.current){
//             const rect = popUpref.current.getBoundingClientRect();
//             popUpref.current.style.top = `${rect.width + 100}px `;
//             console.log(popUpref.current.style);
//         }
//     },[isVisible]);

//     const handleToggel = () => {
//         setIsVisible(isVisible => !isVisible);
//     }
 
//     return (
//         <div>
//                 <button type="button" onClick={handleToggel}>Toggle</button>
//                 {
//                     isVisible && (<div ref={popUpref} style={{position:"absolute"}}>
//                         this is an pop up
//                     </div>)
//                 }
//         </div>
//     )
// }

const userIds = [1,2];

export function UseLayoutEffect() {

    const [userId,setUserId] = useState(userIds[0]);
    const [isAdmin,setIsAdmin] = useState(false);


    // this artificially slow down the rendering..
    let now = performance.now();
    while(performance.now() - now < 200) {
        // do nothing here
    }

    useLayoutEffect(() => {
        setIsAdmin(userId === userIds[0])
    },[userId]);

 

    const handleChange = () =>  {
            const otherIds = userIds.find(id => id !== userId);
            setUserId(otherIds);
    }

    return (
        <div>
                <p>User Id : {userId}</p>
                <p>Admin : { isAdmin ? 'true':'false' }</p>
                <button type="button" onClick={handleChange}>Change User</button>
        </div>
    )
}


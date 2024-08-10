

// way to include local files like images/audio video files 

import Ximgae from './../assets/x.jpg'


export function LocalFiles() {
    return (
        <>
            <h1>Local Files</h1>

            {/* one with public folder directly would serve */}
            <img src="/images/y.jpg" alt="Local file images" />

            {/* second With inside src and assets folders won't work. */}
            <img src="./../assets/x.jpg" alt="Local file images" />

            {/* Third With inside src and assets folders need to import & bind it. */}
            <img src={Ximgae} alt="Local file images" />
        </>
    )
}



// public folder 
// can access directly by using /
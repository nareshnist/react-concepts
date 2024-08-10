
import React from "react";
const appHeader = (props) => {
    console.log(props);
    console.dir(props);

    const simpleFunction = (eve) => {
        console.log(eve);
        alert("exicuted");
    }
    return (
      <React.Fragment> 
        {/* short cut for above */}
        <></>
        <button onClick={simpleFunction()} type="button">Clicked</button>
        <h1>{props.children}</h1>
        <h1>simple header</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, magnam.</p>
      </React.Fragment>
    )
}

export default appHeader;
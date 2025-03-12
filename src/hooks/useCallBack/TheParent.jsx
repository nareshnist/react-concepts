import { useCallback, useState } from "react";

import TheChild from "./TheChild";

function TheParent() {

  const [count, setCount] = useState(0);

  const handdleClick = useCallback(() => {
    console.log("Button clicked");
  },[]);

  const increment = () => {
    setCount(count => count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={ increment}>Increment</button>
      <TheChild onClick={handdleClick}></TheChild>
    </div>
  )
}

export default TheParent

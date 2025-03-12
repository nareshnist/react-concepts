
import React from "react";
function TheChild({onClick}) {
  console.log("Child re-rendered");

  return (
    <div>
      <button type="button" onClick={onClick}>Click Me</button>
    </div>
  )
}

export default React.memo(TheChild)

# React useCallback Hook - Basic Example

## Overview
The `useCallback` hook in React is used to memoize a function, preventing it from being recreated on every render unless its dependencies change. This helps optimize performance, especially when passing functions as props to child components.

## Why Use `useCallback`?
- **Prevents unnecessary function recreation** on every render.
- **Optimizes performance** when passing callbacks to child components.
- **Reduces re-renders** when used with `React.memo`.

## Basic Example
This example demonstrates how `useCallback` can prevent unnecessary re-renders of a child component.

### **Code**
```jsx
import { useState, useCallback } from "react";

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Memoizing the function to avoid recreation on every render
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

// Using React.memo to prevent unnecessary re-renders
const ChildComponent = React.memo(({ onClick }) => {
  console.log("Child re-rendered");
  return <button onClick={onClick}>Click Me</button>;
});

export default ParentComponent;
```

## Explanation
1. `useCallback(() => {...}, [])` ensures that `handleClick` **remains the same** across renders.
2. `React.memo(ChildComponent)` prevents re-rendering of the child component unless its props change.
3. As a result, when clicking the "Increment" button, the child component does **not** re-render.

## Running the Example
1. Create a React app using:
   ```sh
   npx create-react-app usecallback-example
   cd usecallback-example
   ```
2. Replace the contents of `App.js` with the above code.
3. Start the application:
   ```sh
   npm start
   ```
4. Open the browser console and observe that the child component does **not** re-render when clicking the "Increment" button.

---
Next, we will explore **intermediate-level examples**, including practical use cases like handling **search filters and lists efficiently**. 🚀
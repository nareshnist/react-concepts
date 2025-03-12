# useLayoutEffect Hook in React

## Introduction
`useLayoutEffect` is a React Hook that works similarly to `useEffect`, but it fires synchronously after all DOM mutations and before the browser paints the screen. This makes it useful for measuring layout changes and making updates before the user sees any flicker.

## Syntax
```jsx
import { useLayoutEffect, useState, useRef } from 'react';
```

## When to Use `useLayoutEffect`
- When you need to read layout properties (e.g., width, height) and re-render before the browser repaints.
- When you need to perform synchronous DOM mutations.
- When dealing with animations or scroll position adjustments.

## Example: Measuring and Adjusting an Element's Width
```jsx
import { useLayoutEffect, useState, useRef } from "react";

const LayoutEffectExample = () => {
  const [width, setWidth] = useState(0);
  const divRef = useRef(null);

  useLayoutEffect(() => {
    if (divRef.current) {
      setWidth(divRef.current.offsetWidth);
    }
  }, []);

  return (
    <div>
      <div ref={divRef} style={{ width: "50%", background: "lightblue", padding: "20px" }}>
        Resize the window to see changes
      </div>
      <p>Width of the box: {width}px</p>
    </div>
  );
};

export default LayoutEffectExample;
```

## Key Differences Between `useLayoutEffect` and `useEffect`
| Feature | `useEffect` | `useLayoutEffect` |
|---------|------------|-------------------|
| Execution | Runs asynchronously after render | Runs synchronously after DOM updates but before painting |
| Use Case | API calls, state updates, subscriptions | Measuring layout, modifying DOM before paint |
| Performance Impact | Less blocking, better performance | Can block painting, use only when necessary |

## Use Cases
1. **Measuring DOM Elements**: Ensure measurements are accurate before displaying the UI.
2. **Preventing Flicker**: Modify elements synchronously to avoid visual glitches.
3. **Smooth Animations**: Adjust element positions dynamically before the paint cycle.
4. **Scroll Position Fixes**: Restore scroll position synchronously for a smoother user experience.

## When Not to Use `useLayoutEffect`
- If your effect does not require synchronous DOM updates, prefer `useEffect` to avoid performance issues.
- When working with data fetching, event listeners, or subscriptions, `useEffect` is the better choice.

## Conclusion
`useLayoutEffect` is a powerful hook for handling layout-related updates synchronously, but it should be used carefully to avoid performance bottlenecks. Prefer `useEffect` for most side effects unless you need precise control over layout updates before the browser paints the screen.
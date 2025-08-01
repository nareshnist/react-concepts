# Front-End Framework Key Concepts (Simple Notes)

## 1. Component-Based

- UI is built using **components** — small, reusable blocks.
- Each component handles its own structure (HTML), style (CSS), and behavior (JS/TS).
- Example: A button, a navbar, or a card can be separate components.

**Why it's useful?**  
It helps organize code better, makes it reusable, and easier to manage.

---

## 2. Declarative

- You describe **what you want to show**, not how to do it step-by-step.
- The framework takes care of updating the UI based on the data/state.

**Example:**  

jsx
{/* React */}
<h1>Hello {name}</h1>  


## 3. State-Driven

- State is like the memory of a component.
- When the state (data) changes, the UI automatically updates.

**Example:**
If a count variable changes from 0 to 1, the UI reflects the new value.

**Why it's useful?**
It makes the UI dynamic and interactive, like updating likes, search results, or user input instantly.



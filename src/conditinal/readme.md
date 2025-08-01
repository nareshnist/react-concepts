# JavaScript: Short-Circuiting, Nullish Coalescing & Optional Chaining

## 🔁 Logical Operators & Short-Circuiting

### `&&` (AND) Operator

* If the **first operand is falsy**, it immediately returns that operand (short-circuit).
* If the **first operand is truthy**, it returns the second operand.

```js
false && 'hello'      // false (short-circuited)
true && 'hello'       // 'hello'
```

### `||` (OR) Operator

* If the **first operand is truthy**, it returns that operand (short-circuit).
* If the **first operand is falsy**, it checks the next and returns the first truthy value or the last one if all are falsy.

```js
'hi' || 'hello'       // 'hi'
0 || 'no data'        // 'no data'
```

### ⚠️ Gotcha:

```js
const count = 0;
console.log(count || 'no data'); // 'no data' — might be misleading
```

In the above, `0` is a valid value but is treated as falsy, so `'no data'` gets returned. To avoid this, use:

---

## ?? Nullish Coalescing Operator

* Returns the right-hand value **only if** the left-hand is `null` or `undefined` (not other falsy values like `0`, `''`, or `false`).

```js
const count = 0;
console.log(count ?? 'no data');  // 0 ✅
```

---

## ❓ Optional Chaining Operator

* Prevents runtime errors when trying to access a deeply nested property that may not exist.
* If any part of the chain is `null` or `undefined`, it returns `undefined` instead of throwing an error.

```js
const reviews = {
  librarything: null
};

console.log(reviews.librarything?.reviewsCount); // undefined ✅ (no error)
```

Without optional chaining:

```js
console.log(reviews.librarything.reviewsCount); // ❌ TypeError
```

---

## Summary

| Operator | Purpose                                                    |    |                                          |
| -------- | ---------------------------------------------------------- | -- | ---------------------------------------- |
| `&&`     | Short-circuit if first operand is falsy                    |    |                                          |
| \`       |                                                            | \` | Short-circuit if first operand is truthy |
| `??`     | Return right operand only if left is `null` or `undefined` |    |                                          |
| `?.`     | Safe property access without error                         |    |                                          |

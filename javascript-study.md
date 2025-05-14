# JavaScript Study Guide

[Reference 01](https://www.udemy.com/course/the-complete-javascript-course/)

Welcome to the JavaScript Study Guide! This document serves as a comprehensive resource to help you deepen your understanding of JavaScript, one of the most popular and versatile programming languages. Whether you're a beginner or looking to refine your skills, this guide will provide you with essential concepts, best practices, and practical examples to enhance your learning journey.

Happy coding!

## IDEs

- Visual Studio Code
- GitHub Theme
- Copilot

## Fundamentals

JavaScript is a high-level, object-oriented, multi-paradigm programming language.

JavaScript enables developers to create dynamic and interactive web content, such as real-time updates, animations, and form validations. It is primarily used for client-side scripting but can also be employed on the server side with environments like Node.js. As a versatile language, JavaScript supports event-driven, functional, and imperative programming styles, making it a cornerstone of modern web development.

### Best Practices for Writing Variables in JavaScript

1. **Use `const` and `let` instead of `var`**

   - Use `const` for variables whose values will not be reassigned.
   - Use `let` for variables whose values may change.
   - Avoid `var`, as it has function scope and can cause hoisting issues.

2. **Follow the camelCase convention**

   - Use camelCase for naming variables and functions.
   - Start with a lowercase letter and use uppercase letters to separate words.

3. **Choose descriptive names**

   - Use names that clearly explain the purpose of the variable.
   - Avoid generic names like `x`, `y`, or `data` unless the context is obvious.

4. **Avoid abbreviations**

   - Prefer full names over abbreviations that might be unclear.

5. **Use constants for fixed values**
   - For values that do not change, use `const` and write them in `UPPER_CASE` with underscores.

### Best Practices for Writing Functions in JavaScript

1. **Use Descriptive Function Names**

   - Choose names that clearly describe the purpose of the function.
   - Use verbs for functions that perform actions, e.g., `calculateTotal`, `fetchData`.

2. **Keep Functions Small and Focused**

   - A function should perform a single task or responsibility.
   - Break down large functions into smaller, reusable ones.

3. **Use Default Parameters**

   - Provide default values for parameters to handle missing arguments gracefully.

   ```javascript
   function greet(name = "Guest") {
   	console.log(`Hello, ${name}!`);
   }
   ```

4. **Avoid Side Effects**

   - Functions should avoid modifying external variables or states unless necessary.
   - Use pure functions whenever possible.

5. **Use Arrow Functions for Simplicity**

   - Use arrow functions for concise syntax, especially for callbacks.

   ```javascript
   const add = (a, b) => a + b;
   ```

6. **Document Function Behavior**

   - Use comments or JSDoc to describe the purpose, parameters, and return value of the function.

   ```javascript
   /**
    * Calculates the sum of two numbers.
    * @param {number} a - The first number.
    * @param {number} b - The second number.
    * @returns {number} The sum of the two numbers.
    */
   function add(a, b) {
   	return a + b;
   }
   ```

7. **Handle Errors Gracefully**

   - Use `try...catch` blocks to handle potential errors in your functions.

   ```javascript
   function parseJSON(jsonString) {
   	try {
   		return JSON.parse(jsonString);
   	} catch (error) {
   		console.error("Invalid JSON string:", error);
   		return null;
   	}
   }
   ```

8. **Avoid Overloading Functions**

   - Instead of overloading, use different function names or parameter objects for clarity.

9. **Use Function Expressions When Necessary**

   - Use named function expressions for better debugging and stack traces.

   ```javascript
   const factorial = function calculateFactorial(n) {
   	return n <= 1 ? 1 : n * calculateFactorial(n - 1);
   };
   ```

10. **Return Early**
    - Use early returns to simplify logic and reduce nesting.
    ```javascript
    function isAdult(age) {
    	if (age < 18) {
    		return false;
    	}
    	return true;
    }
    ```

By following these best practices, your functions will be more readable, maintainable, and easier to debug.

#### Refactoring Your Code

By following these practices, your code becomes more readable, organized, and aligned with modern best practices.

### JavaScript Primitive Data Types

JavaScript has 7 primitive data types:

1. **String**: Represents text, e.g., `"Hello"`.
2. **Number**: Represents numeric values, e.g., `42` or `3.14`.
3. **BigInt**: For integers larger than `Number.MAX_SAFE_INTEGER`, e.g., `123n`.
4. **Boolean**: Represents `true` or `false`.
5. **Undefined**: A variable declared but not assigned a value.
6. **Null**: Represents the intentional absence of any value.
7. **Symbol**: Unique and immutable values, often used as object keys.

These types are immutable and stored by value.

#### Additional Primitive Data Type

8. **Undefined Behavior in `typeof null`**: While `null` is a primitive type, the `typeof null` operation incorrectly returns `"object"` due to a historical bug in JavaScript. This behavior is widely recognized but remains for backward compatibility.

This highlights the importance of understanding quirks in JavaScript when working with its primitive types.

### Operator Precedence in JavaScript

Operator precedence determines the order in which operators are evaluated in an expression. JavaScript follows a specific set of rules to decide which operations to perform first when multiple operators are present.

#### Precedence Levels

Operators with higher precedence are evaluated before those with lower precedence. For example:

```javascript
let result = 3 + 4 * 5; // Multiplication (*) has higher precedence than addition (+)
console.log(result); // Output: 23
```

In the example above, `4 * 5` is evaluated first, followed by `3 + 20`.

#### Associativity

When operators have the same precedence, associativity determines the order of evaluation:

- **Left-to-right associativity**: Most operators, like addition (`+`) and subtraction (`-`), are evaluated from left to right.

  ```javascript
  let result = 10 - 5 - 2; // Evaluated as (10 - 5) - 2
  console.log(result); // Output: 3
  ```

- **Right-to-left associativity**: Some operators, like assignment (`=`) and exponentiation (`**`), are evaluated from right to left.
  ```javascript
  let result = 2 ** (3 ** 2); // Evaluated as 2 ** (3 ** 2)
  console.log(result); // Output: 512
  ```

#### Parentheses

Parentheses can be used to override operator precedence and explicitly define the order of operations:

```javascript
let result = (3 + 4) * 5; // Parentheses force addition to be evaluated first
console.log(result); // Output: 35
```

#### Common Precedence Table

Here is a simplified table of common operators in descending order of precedence:

| Precedence | Operator(s)                                       | Associativity |
| ---------- | ------------------------------------------------- | ------------- |
| 1          | `()` (parentheses)                                | N/A           |
| 2          | `++`, `--` (increment/decrement)                  | Right-to-left |
| 3          | `**` (exponentiation)                             | Right-to-left |
| 4          | `*`, `/`, `%` (multiplication, division, modulus) | Left-to-right |
| 5          | `+`, `-` (addition, subtraction)                  | Left-to-right |
| 6          | `<`, `<=`, `>`, `>=` (comparison)                 | Left-to-right |
| 7          | `===`, `!==` (equality)                           | Left-to-right |
| 8          | `&&` (logical AND)                                | Left-to-right |
| 9          | `\|\|` (logical OR)                               | Left-to-right |
| 10         | `=` (assignment)                                  | Right-to-left |

Understanding operator precedence helps you write clear and predictable code. When in doubt, use parentheses to make your intentions explicit.

### JavaScript Events

JavaScript events are actions or occurrences that happen in the browser, which JavaScript can respond to. Events are a core part of interactive web development, allowing developers to create dynamic and responsive user interfaces.

#### Common Types of Events

1. **Mouse Events**

   - `click`: Triggered when an element is clicked.
   - `dblclick`: Triggered when an element is double-clicked.
   - `mouseover`: Triggered when the mouse pointer moves over an element.
   - `mouseout`: Triggered when the mouse pointer moves out of an element.
   - `mousedown`: Triggered when a mouse button is pressed on an element.
   - `mouseup`: Triggered when a mouse button is released over an element.

2. **Keyboard Events**

   - `keydown`: Triggered when a key is pressed down.
   - `keyup`: Triggered when a key is released.
   - `keypress`: (Deprecated) Triggered when a key is pressed. Use `keydown` or `keyup` instead.

3. **Form Events**

   - `submit`: Triggered when a form is submitted.
   - `change`: Triggered when the value of an input, select, or textarea changes.
   - `focus`: Triggered when an element gains focus.
   - `blur`: Triggered when an element loses focus.
   - `input`: Triggered when the value of an input element changes.

4. **Window Events**

   - `load`: Triggered when the entire page, including all dependent resources, is loaded.
   - `resize`: Triggered when the browser window is resized.
   - `scroll`: Triggered when the user scrolls the page.
   - `unload`: Triggered when the user leaves the page.

5. **Touch Events** (for touch-enabled devices)

   - `touchstart`: Triggered when a touch point is placed on the screen.
   - `touchmove`: Triggered when a touch point moves across the screen.
   - `touchend`: Triggered when a touch point is removed from the screen.

6. **Drag and Drop Events**

   - `dragstart`: Triggered when the user starts dragging an element.
   - `drag`: Triggered while the element is being dragged.
   - `dragend`: Triggered when the user stops dragging the element.
   - `dragover`: Triggered when a dragged element is over a valid drop target.
   - `drop`: Triggered when a dragged element is dropped on a valid drop target.

7. **Media Events**
   - `play`: Triggered when media playback starts.
   - `pause`: Triggered when media playback is paused.
   - `ended`: Triggered when media playback ends.
   - `volumechange`: Triggered when the volume is changed.

#### Event Listeners

To handle events, you can use event listeners. Event listeners allow you to define a function that will execute when a specific event occurs.

```javascript
// Example: Adding a click event listener to a button
const button = document.querySelector("button");
button.addEventListener("click", () => {
	console.log("Button clicked!");
});
```

#### Event Propagation

JavaScript events propagate through the DOM in three phases:

1. **Capturing Phase**: The event travels from the root to the target element.
2. **Target Phase**: The event reaches the target element.
3. **Bubbling Phase**: The event bubbles back up to the root.

You can control propagation using methods like `stopPropagation()` and `preventDefault()`.

Understanding JavaScript events is essential for creating interactive and user-friendly web applications.

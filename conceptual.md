## Conceptual Questions

### 1. What is React? When and why would you use it?
React is a JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components. React is used for efficient, declarative rendering of views.

### 2. What is Babel?
Babel is a JavaScript compiler that converts modern JavaScript (ES6+) into a version compatible with older browsers.

### 3. What is JSX?
JSX is a syntax extension for JavaScript that resembles HTML. It is used in React to describe UI structure within JavaScript code.

### 4. How is a Component created in React?
A component in React can be created as a function or a class that returns a React element (JSX). Functional components are more common in modern React development.

### 5. What are some differences between state and props?
Props are read-only data passed from parent to child components, while state is a local, mutable data structure managed within a component.

### 6. What does "downward data flow" refer to in React?
"Downward data flow" means that data flows from parent components to child components via props, ensuring a predictable unidirectional data flow.

### 7. What is a controlled component?
A controlled component is a form element that is controlled by React state. The form element’s value is set by React.

### 8. What is an uncontrolled component?
An uncontrolled component is a form element that maintains its own state. React does not control the value of the element.

### 9. What is the purpose of the `key` prop when rendering a list of components?
The `key` prop helps React identify which items have changed, are added, or are removed in a list, optimizing rendering.

### 10. Why is using an array index a poor choice for a `key` prop when rendering a list of components?
Using an array index as a key can cause issues with component reordering and lead to inefficient updates or unexpected behavior.

### 11. Describe useEffect. What use cases is it used for in React components?
`useEffect` is a hook that runs side effects in functional components. It’s used for tasks like fetching data, setting up subscriptions, and manually changing the DOM.

### 12. What does useRef do? Does a change to a ref value cause a rerender of a component?
`useRef` returns a mutable ref object that persists across renders. Changing a ref does not cause a rerender.

### 13. When would you use a ref? When wouldn't you use one?
Refs are used to access DOM elements directly or to store mutable variables. They shouldn’t be used for storing derived data that influences rendering.

### 14. What is a custom hook in React? When would you want to write one?
A custom hook is a reusable function that encapsulates common logic in React. It’s used when multiple components share similar logic.

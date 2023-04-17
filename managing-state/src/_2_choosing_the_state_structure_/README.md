# Choosing the State Structure

### 1. Principles of Structuring State

1. Group related state. If you always update two or more state variables at the same time, consider merging them into a
   single state variable.
```js
// use 
const [position, setPosition] = useState({ x: 0, y: 0 });

// instead of
const [x, setX] = useState(0);
const [y, setY] = useState(0);
```
2. Avoid contradictions in state. When the state is structured in a way that several pieces of state may contradict and
   “disagree” with each other, you leave room for mistakes. Try to avoid this.
```js

```
3. Avoid redundant state. If you can calculate some information from the component’s props or its existing state
   variables during rendering, you should not put that information into that component’s state.
4. Avoid duplication in state. When the same data is duplicated between multiple state variables, or within nested
   objects, it is difficult to keep them in sync. Reduce duplication when you can.
5. Avoid deeply nested state. Deeply hierarchical state is not very convenient to update. When possible, prefer to
   structure state in a flat way.


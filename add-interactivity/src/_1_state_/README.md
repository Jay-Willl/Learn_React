# Introduction to state

### 1. Problems

#### 1). A regular variable is not enough

1. Local variables don’t persist between renders. When React renders this component a second time, it renders it from
   scratch—it doesn’t consider any changes to the local variables.
2. Changes to local variables won’t trigger renders. React doesn’t realize it needs to render the component again with
   the new data.

#### 2). Two things need to happer

1. Retain the data between renders.
2. Trigger React to render the component with new data (re-rendering).

### 2. useState and Hook

#### x). array destructuring

The array returned by useState always has exactly two items.

```js
const [index, setIndex] = useState(0);
// index: state variable
// setIndex: setter function
```

#### 1). introduction to hook

1. in React, func starting with `use` is called a 'hook'
2. Hooks are special functions that are only available while React is rendering (which we’ll get into in more detail on
   the next page). They let you “hook into” different React features.

#### 2). process

1. The component renders the first time. Because you passed 0 to useState as the initial value for index, it will
   return [0, setIndex]. React remembers 0 is the latest state value.
2. The state has been updated. When a user clicks the button, it calls setIndex(index + 1). index is 0, so it’s
   setIndex(1). This tells React to remember index is 1 now and triggers another render.
3. The component’s second render. React still sees useState(0), but because React remembers that you set index to 1, it
   returns [1, setIndex] instead.

#### 3). how does React know which state to return

1. problem: There is no “identifier” that is passed to useState, so how does it know which of the state variables to
   return?
2. answer: Hooks rely on a stable call order on every render of the same component.
3. explanation: Hooks can only be placed at the top level, so hooks will always be called in the same order. Internally,
   React holds an array of state pairs for every component. It also maintains the current pair index, which is set to 0
   before rendering. Each time you call useState, React gives you the next state pair and increments the index.
4. warning: A state variable is only necessary to keep information between re-renders of a component. Within a single
   event handler, a regular variable will do fine. Don’t introduce state variables when a regular variable works well.





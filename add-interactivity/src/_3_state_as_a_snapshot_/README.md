# State as a Snapshot

### 1. Setting state triggers render

#### 1). In the official tutorial

1. In the process of state machine, setting state only changes it for the next render. It means that

```js
setNumber(number + 1);
setNumber(number + 1);
setNumber(number + 1);

// does NOT equal to 

setNumber(number + 3);
```

2. During the same state, state variable NEVER change

```js
setNumber(number + 1);
alert(number)

// equal to

setNumber(0 + 1);
alert(0);
```

#### 2). Deep dive

1. render DO get called any time "setState" is called,
   see https://stackoverflow.com/questions/24718709/reactjs-does-render-get-called-any-time-setstate-is-called/24719289#24719289
2. Overall, there is a method `boolean shouldComponentUpdate(object nextProps, object nextState)`, by default, the
   return value is set to be `true`.
3. *if you are careful to always treat the state as immutable and to read-only from props and state in `render()` then
   you can override `shouldComponentUpdate()` with an implementation that compares the old props and state to their
   replacements.*

### 2. Two Types of Renders

1. Virtual DOM renders: when render method is called it returns a new virtual dom structure of the component. This
   render method is called always when `setState()` is called, because `shouldComponentUpdate()` always
   returns true by default. So, by default, there is no optimization here in React.
2. Native DOM renders: React changes real DOM nodes in your browser only if they were changed in the Virtual DOM and as
   little as needed - this is that great React's feature which optimizes real DOM mutation and makes React fast.

React servers as a middleware to optimize performance.
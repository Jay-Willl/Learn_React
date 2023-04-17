# Referencing Values with Refs

### 1. How to Use a Ref

1. import

```js
import {useRef} from 'react';
```

2. call the hook and pass initial value

```js
const ref = useRef(0);

// and it returns an object like
{
    current: 0
} // The value you passed to useRef
```

3. access the current value of that ref through the ref.current property

```js
ref.current = ref.current + 1;
```

ref is a plain JavaScript object with `current` property

### 2. When to Use a Ref

#### 1. Ref usage

Use a ref when component needs to “step outside” React and communicate with external APIs—often a browser API that
won’t impact the appearance of the component.

1. Storing timeout IDs
2. Storing and manipulating DOM elements
3. Storing other objects that aren't necessary to calculate JSX

#### 2. Ref and common variable

1. local variable get initialized from scratch whenever the component re-renders
2. variable in ref will preserve between renders


### 3. Ref and DOM(see next section)

If pass a `ref` attribute in JSX `(<div ref={myRef}><div/>)`, React will put the corresponding DOM element into
`myRef.current`










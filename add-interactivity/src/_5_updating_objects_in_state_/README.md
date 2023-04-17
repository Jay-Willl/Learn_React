# Updating Objects in State

### 1. How to Correctly Change the State

#### 1). Immutable & Read-only

1. Treat state as immutable: always replace state instead of trying to mutate them.

```js
<div onPointerMove={e => {
    setState({
        x: e.clientX,
        y: e.clientY
    });
}}/>

// instead of

<div onPointerMove={e => {
    position.x = e.clientX;
    position.y = e.clientY;
}}/>
```

2. Treat state as read-only: if modify state variable without `state` variable, React has no idea that state has
   changed, so there will not be any response.

#### 2). Commonly used pattern

1. If part of state required to be changed, there is a way to take advantage of the read-only property.

```js
setState({
    x: e.clientX,
    y: state.y
})
```

2. Futhermore, use `...` object spread syntax candy

```js
setState({
    ...state,
    x: e.clientX
})
```

3. Use a single event handler for multiple fields

```js
function handleChange(e) {
    setState({
        ...state,
        [e.target.name]: e.target.value
    });
}

return (
    <input name="xxx"
           value={state.xxx}
           onChange={handleChange}
    />
)
```

### 2. Updating More Complex Object

#### 1). A nested object

1. Some state objects are nested

```js
const [piece, setPiece] = useState({
    title: "Mahler Symphony No.1",
    author: {
        name: "Gustav Mahler",
        nationality: "Austria"
    }
})
```

2. Still need to use object spread syntax

```js
setPiece({
    ...piece, // Copy other fields
    author: {  // but replace the artwork
        ...piece.author,
        nationality: "Germany" // still the same
    }
})
```

3. Deep dive: objects aren't really nested
When the code executes, there is no such thing as a "nested" object, it's like one object introduce a pointer to
another pointer.






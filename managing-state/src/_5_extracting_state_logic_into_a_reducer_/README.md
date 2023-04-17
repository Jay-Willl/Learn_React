# Extracting State Logic into a Reducer

As components grow in complexity, it can get harder to see at a glance all the different ways in which a component’s
state gets updated.

### 1. Consolidate State Logic with a Reducer
1. state: "what to do"
2. reducer: "what the user just did"
3. 只是换了一种写法, 但确实更加简洁
```js
const[tasks, dispatch] = useReducer(tasksReducer, initialTasks);
```
```js
// specific handler
function handleAdd(text) {
    dispatch(
        // "action" object
        // "type" described what just happend
        {
            type: 'added',
            id: nextId++,
            text: text,
        }
    );
}
```
```js
// reducer
function tasksReducer(state, action) {
    if (action.type === 'added') {
        return [
            ...tasks,
            {
                id: action.id,
                text: action.text,
                done: false,
            },
        ];
    } else {
        //...
    }
}
```

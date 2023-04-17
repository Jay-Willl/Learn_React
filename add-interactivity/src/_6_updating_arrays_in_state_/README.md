# Updating Arrays in State

### 1. Add, Remove, Change Items in an Array in React State

#### 1). Add

use `concat`, `[...arr]` spread syntax

```js
const [pieces, setPiece] = useState([]);

setPiece([  // append after original
    ...pieces,
    {title: "xxx", author: "xxx"}
]);

setPiece([
    {title: "xxx", author: "xxx"},
    ...pieces
]);
```

#### 2). Remove

use `filter`, `slice`

```js
const [articles, setArticle] = useState(initialArticles);

setArticle(
    articles.filter(a => a.id !== article.id)
)
```

#### 3). Transforming or Replacing Items in Array

use `map` to create a new array and then set it

```js
const nextShape = shapes.map(
    shape => {
        if (shape.type == 'square') {
            return shape;
        } else if (shape.type == 'circle') {
            return {
                ...shape,
                position: shape.position + 10
            };
        }
    }
);
setShape(nextShape);
```

use a lambda expression to easily iterate content and index

```js
function handleClick(index) {
    const nextArr = arr.map(
        (c, i) => {
            if (i === index) {
                return c + 1;
            } else {
                return c;
            }
        }
    )
    setArr(nextArr);
}
```

#### 4). Inserting

use `...` together with `slice()`

```js
function handleInsert(index) {
    const nextArr = [
        ...arr.slice(0, index),
        {id: "xxx", content: "xxx"},
        ...arr.slice(index)
    ]
    setArr(nextArr);
}
```

#### 5). Updating

Copies in React are shallow, copied array and original array both point to the same items, so do not mutate array items
directly. In the situation of two states have the same initial state, it will bring a problem.

```js
const nextList = [...list];
nextList[0].seen = true; // Problem: mutates list[0]
setList(nextList);
```

use `map` method to substitute old item with a new one.

```js
function handleModify(index) {
    const nextArr = arr.map(
        article => {
            if (article.id === index) {
                return {...article, visible: true};
            } else {
                return article;
            }
        }
    );
}
```

### 2. Routines

#### 1). How to render array

```js
function itemList({ arr, handler }) {
    return (
        <ul>
            {arr.map(item => (
                <li key={item.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={item.visible}
                            onChange={e => {
                                handler(
                                    item.id,
                                    e.target.checked
                                );
                            }}
                        />
                        {item.title}
                    </label>
                </li>
            ))}
        <ul/>);}
```



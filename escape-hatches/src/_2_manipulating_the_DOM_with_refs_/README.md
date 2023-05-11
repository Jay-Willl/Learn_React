# Manipulating the DOM with Refs

有时需要访问 React 管理下的 DOM 元素: 获取长宽高/位置
需要 Ref 来辅助访问

### 1. 通过 Ref 获取 DOM 元素

An example for focusing a text input

```js
import {useRef} from 'react';

export default function Form() {
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    }

    return (
        < >
            <!-- tell React to put <input/> DOM into Ref -->
            <input ref={inputRef}/>
            <button onClick={handleClick}>
                Focus the input
            </button>
        </>
    )
}
const testRef = useRef(null);
<div ref={testRef}/>
```

### 2. Ref's Mechanism

#### 1. update in React

1. Render时, React 计算并确定什么应该出现在屏幕上.
2. Commit时, React 将变更加载到实际DOM上.

---

1. 在第一次 render 时, DOM 节点并没有被创建, 因此此时 ref 中的元素是空的. 
2. React 在 commit 时设置 ref.current. 在更新 DOM 前, React 将对应 ref 置空, 更新后再设置其 ref 对应值.
3. 通常情况下会在 eventHandler 中使用 ref, 如果没有特定的 event 可以作为入口操作 ref, 则应当考虑使用 effect.


```js

```



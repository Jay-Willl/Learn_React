# Manipulating the DOM with Refs

有时需要访问 React 管理下的 DOM 元素: 获取长宽高/位置
需要 ref 来辅助访问

### 1. 通过 ref 获取 DOM 元素

```js
import { useRef } from 'react';

export default function Form() {
    const inputRef = useRef(null);
    function handleClick() {
        inputRef.current.focus();
    }
    return (
        < >
            <!-- tell React to put <input/> DOM into Ref -->
            <input ref={inputRef} />
            <button onClick={handleClick}>
                Focus the input
            </button>
        </>    
    ) 
}
const testRef = useRef(null);
<div ref={testRef}/>
```

### 2. 管理 ref 数组

1. 

```js

```



# Synchronizing with Effects

### 1. Logic Review

1. 渲染图像, 描述UI -> 获取 props, state 再返回严格对应的 JSX
2. 处理事件 -> 改变相应 state, 产生 “side effect”
3. 渲染本身产生 “side effect”

### 2. Use Effect

#### 1. Declare an Effect

```js
import {useEffect} from 'react';

export default function Test() {
    useEffect(() => {
        // Every time the components renders, 
        // React will update the screen and then run this block of codes
    });
    return <div/>;
}

function VideoPlyaer({src, isPlaying}) {
    // TODO: finish control logic with 'isPlaying'
    // TODO: video does not have prop 'isPlaying'
    // TODO: the only way is to manully call 'play' and 'pause'
    return <video src={src}/>;
}
```

##### 2. Ref does not work

The following code does not work, because IT IS TRYING TO DO SOMETHING WITH THE DOM DURING RENDERING.\
Moreover, when VideoPlayer is called for the first time, its DOM does not exist yet! React does not know what DOM to
create until you return the JSX.

```js
import {useState, useRef, useEffect} from 'react';

function VideoPlayer({src, isPlaying}) {
    const ref = useRef(null);
    if (isPlaying) {
        ref.current.play();  // Calling these while rendering isn't allowed.
    } else {
        ref.current.pause(); // Also, this crashes.
    }
    return <video ref={ref} src={src} loop playsInline/>;
}

export default function App() {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <>
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <VideoPlayer
                isPlaying={isPlaying}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />
        </>
    );
}
```

#### 3. Solution

Wrap logic control with `useEffect`

```js
import {useEffect, useRef} from 'react';

function VideoPlayer({src, isPlaying}) {
    const ref = useRef(null);
    useEffect(() => {
        if (isPlaying) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    });
    return <video ref={ref} src={src} loop playsInline/>;
}
```

#### x. 使用 Effect 和 State 的注意事项

Do not set state inside `useEffect`, `useState` 导致了重渲染, `useEffect` 是渲染的副作用. 在 `useEffect`
中调用 `useState` 就像将电源插座插回自己, 会导致死循环.

#### 4. 确定 Effect 依赖数组

1. 在默认情况下, `useEffect` 在每次render之后都会被调用, 这有两个危害: 慢/造成错误
2. 通过一个表示依赖的数组来避免不必要的重渲染
这个数组告诉 React, 如果数组中的内容保持不变, 就不会触发 `Effect`\
数组中的各个元素是 ‘与’ 的关系, 只有所有 dependencies 保持一致, 才不会触发 `Effect`
```js
useEffect(() => {
   // ...
}, [isPlaying]);
```
#### y. 为什么依赖数组中不需要添加 Ref ?

Cause React guarantees Ref object to have the stable identity.

#### z. 不同的 useEffect 写法

1. 没有依赖数组
```js
useEffect(() => {
    // This runs after every render
});
```
2. 仅有依赖数组
```js
useEffect(() => {
    // This runs only on mount (when the component appears)
}, []);
```
3. 正常情况
```js
useEffect(() => {
    // This runs on mount *and also* if either a or b have changed since the last render
}, [a, b]);
```

#### 5. 添加 cleanup

考虑一个 Chatroom 的例子

1. 在这个代码下, 会显示 connect 两次
```js
useEffect(() => {
    const connection = createConnnection();
    connection.connect();
}, []);
```
React 会立刻 remount 当组件第一次被 mount

2. 为了解决这个问题, 需要一个 cleanup 函数
```js
useEffect(() => {
    const connection = createConnection();
    connection.connect();
    return () => {
        connection.disconnect();
    };
});
```




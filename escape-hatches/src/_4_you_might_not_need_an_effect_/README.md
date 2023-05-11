# You Might Not Need an Effect

### 1. Remove Unnecessary Effect

1. 不要用 Effect 来处理数据
2. 不要用 Effect 来处理用户事件

### 2. Calculate from State

考虑一个例子: 一个组件拥有两个 state: firstName & lastName, 直观上计算 fullName 需要以下代码
```js
const [fullName, setFullName] = useState('');
useEffect(() => {
    setFullName(firstName + ' ' + lastName);
}, [firstName, lastName]);
```
但其实这是非常多余的, 因为
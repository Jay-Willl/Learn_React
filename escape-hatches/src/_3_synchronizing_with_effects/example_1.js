import { useState, useRef, useEffect } from 'react';

export default function InfLoop() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(count + 1);
    });

    return <div>{count}</div>;
}
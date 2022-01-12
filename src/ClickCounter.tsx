import { useState } from "react";

export const ClickCount = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(c => c+1)}>Count {count}</button>
        </div>
    ) 
}
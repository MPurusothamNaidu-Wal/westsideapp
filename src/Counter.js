import { useState } from "react";

function Counter(){
    let [count, setCount] = useState(0)
    function increase(){
        setCount(count+2)
    }
    function decrease(){
        setCount(count-2)
    }
    function reset(){
        setCount(0);
    }
    return(
        <div>
        <h2>Count : {count}</h2>
        <button onClick={increase}>Increase by 2</button>
        <button onClick={decrease}>Decrease by 2</button>
        <button onClick={reset}>Reset counter</button>
        </div>
    )
}
export default Counter ;
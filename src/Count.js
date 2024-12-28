import './App.css';
import { useState } from "react";

export default function MyApp(){
    return(
        <div>
            <h1>Counter Update</h1>
            <MyButton/>
            <MyButton/>
        </div>
    )
}
function MyButton(){
    const [Count , setCount] = useState(0); 

    function handleClick(){
        setCount(Count+1);
    }
    return(
        <button onClick={handleClick}>
            Clicked{Count}times
        </button>
    )
}

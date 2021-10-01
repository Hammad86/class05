import React,{useContext} from 'react'
import contextCreator from '../context/Context'
function Counter() {
    let counterContext = useContext(contextCreator)
    return (
        <div>
            <h1>Counter Value From Context  {counterContext[0]}</h1>
            <button onClick={()=>{counterContext[1](++counterContext[0])}}>Increment</button>
            <button onClick={()=>{counterContext[1](--counterContext[0])}}>Decreament</button>
        </div>
    )
}

export default Counter

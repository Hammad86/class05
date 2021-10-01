import React, { useReducer } from 'react'
import reducer from '../context/reducer'

function Counter1() {
    let [state , dispatch] = useReducer(reducer,1)
    return (
        <div>
            <h2>Counter Value From Reducer: {state}</h2>
            <button onClick={()=>dispatch('INCREAMENT')}>Increment</button>
            <button onClick={()=> dispatch('DECREAMENT')}>Decrement</button>
        </div>
    )
}

export default Counter1

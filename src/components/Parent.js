import React from 'react'
import Counter from './Counter'
import Counter1 from './Counter1'

function Parent(props) {
    return (
        <div>
            <Counter/>
            <Counter1/>
        </div>
    )
}

export default Parent

import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement,incrementAsyncc,fetchUser} from '../Actions/Actions'
function Counter() {
    const dispatch=useDispatch()
    const count = useSelector(state => state)
    return (
        <div>
            {count}
            <button onClick={()=>dispatch(increment)}>increment</button>
            <button onClick={()=>dispatch(decrement)}>decrement</button>
            <button onClick={()=>dispatch({type:incrementAsyncc})}>increment Async</button>
            <button onClick={()=>dispatch({type:fetchUser})}>Fetch user</button>
        </div>
    )
}

export default Counter

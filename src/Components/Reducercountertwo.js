import React,{useReducer} from 'react'
const initialState = 0
const reducer = (state,reducer)=>{
    switch(reducer){
        case 'increment':
        return state + 1
        case 'decrement':
        return state - 1;
        case 'reset':
        return initialState 
    }

}

function Reducercountertwo() {
   const [count,dispatch] =  useReducer(reducer,initialState)
  return (
    <div>
        <div>Count - {count}</div>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('decrement')}>decrement</button>
        <button onClick={()=>dispatch('reset')}>reset</button>

    </div>
  )
}

export default Reducercountertwo
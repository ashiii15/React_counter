import React,{useReducer} from 'react'
const initialState = {
    firstvalue : 0
}
const reducer = (state,action)=>{
    switch (action.type){
        case 'increment':
        return  {firstvalue: state.firstvalue + 1}
        case 'decrement':
        return {firstvalue : state.firstvalue - 1}
        case 'reset':
        return initialState
             case 'incrementfive':
            return  {firstvalue: state.firstvalue + 5}
            case 'decrementfive':
            return {firstvalue : state.firstvalue - 5}
            case 'reset':
                return initialState

    }
    
}

function ReducerCounter() {
   const [count,dispatch] = useReducer(reducer,initialState)
   const [countFive,dispatchFive] = useReducer(reducer,initialState)

  return (
    <div>
        <div>count - {count.firstvalue}</div>
        <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        {/* five */}
        <div>count- {countFive.firstvalue}</div>
        <button onClick={()=>dispatchFive({type:'incrementfive'})}>Increment5</button>
        <button onClick={()=>dispatchFive({type:'decrementfive'})}>Decrement5</button>
        <button onClick={()=>dispatchFive({type:'reset'})}>Reset</button>



    </div>
  )
}

export default ReducerCounter
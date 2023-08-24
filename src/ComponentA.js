import React,{useContext} from 'react'
import { CountContex } from './App'

function ComponentA() {
    const CountContex = useContext(CountContex)
  return (
    <div>
        componentA
        <button onClick={()=>CountContex.countdispatch('increment')}>Increment</button>
        <button onClick={()=>CountContex.countdispatch('decrement')}>decrement</button>
        <button onClick={()=>CountContex.countdispatch('reset')}>reset</button>
    </div>
  )
}

export default ComponentA
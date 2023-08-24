import React,{useContext} from 'react'
import { CountContex } from '../App'

function ComponentD() {
const CountContex = useContext(CountContex)
  return (
    <div>
        ComponentD
        <button onClick={()=>CountContex.countdispatch('increment')}>Increment</button>
        <button onClick={()=>CountContex.countdispatch('decrement')}>decrement</button>
        <button onClick={()=>CountContex.countdispatch('reset')}>reset</button>
    </div>
  )
}

export default ComponentD
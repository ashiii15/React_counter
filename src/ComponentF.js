import React,{useContext} from 'react'
import { CountContex } from './App'

function ComponentF() {
  const CountContex = useContext(CountContex)

  return (
    <div>
      ComponentF
       <button onClick={()=>CountContex.countdispatch('increment')}>Increment</button>
        <button onClick={()=>CountContex.countdispatch('decrement')}>decrement</button>
        <button onClick={()=>CountContex.countdispatch('reset')}>reset</button>
    </div>
  )
}

export default ComponentF
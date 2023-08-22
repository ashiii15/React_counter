import React,{useState} from 'react'

function HookCounter() {
    const [count,clickHandler] = useState(0)
  return (
    <div>
        <button onClick={()=>clickHandler(count+1)}>Count {count}</button>
    </div>
  )
}

export default HookCounter
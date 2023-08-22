import React,{useState} from 'react'
import HookMouse from './HookMouse'

function Mousecontainer() {
    const [dispaly,setDisplay] = useState(false)
  return (
    <div>
        <button onClick={()=>setDisplay(!dispaly)}>mouse Toggle</button>
        {dispaly && <HookMouse></HookMouse>}
    </div>
  )
}

export default Mousecontainer
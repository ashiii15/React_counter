import React,{useState,useEffect} from 'react'

function HookCounterfive() {
    const [count,incrementValue] = useState(0)
    const [name,changeValue] = useState('')

     useEffect(()=>{
        console.log(`updating document title`);
        document.title = `you clicked ${count} times`
    },[count])
  return (
    <div>
        <input type='text' value={name} onChange={e =>changeValue(e.target.value)}></input>
        <button onClick={()=>incrementValue(count + 1)} >click {count}  times</button>

    </div>
  )
}

export default HookCounterfive
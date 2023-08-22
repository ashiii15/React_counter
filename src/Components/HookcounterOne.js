import React,{useState,useEffect} from 'react'

function HookcounterOne() {
    const [count, timeFunction] = useState(0)
    useEffect(()=>{
        const interval = setInterval(tick,1000)
        return (()=>{
            clearInterval(interval)
        })
    },[count])
     const tick = ()=>{
        timeFunction(count + 1)
    }
  return (
    <div>{count}</div>
  )
}

export default HookcounterOne
import React,{useState} from 'react'

function HookcounterTwo() {
    const initialValue = 0
    const [count,setCount] = useState(initialValue) 
  const incrementFive = ()=>{
        for( let i = 0 ; i< 5; i++){
            setCount(prevState => prevState + 1)
        }
    }

  return (
    <div>
        count{count}
      <button onClick={()=>setCount(initialValue)}>Reset</button>
      <button onClick={()=>setCount(prevState => prevState + 1)}>Increment</button>
      <button onClick={()=>setCount(prevState => prevState - 1)}>Decrement</button>
      <button onClick={incrementFive}>IncrementByFive</button>
    </div>
  )
}

export default HookcounterTwo
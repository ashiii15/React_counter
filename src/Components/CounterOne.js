import React,{useState} from 'react'

function CounterOne() {
    const [counterone, setcounterone] = useState(0)
    const [countertwo, setcountertwo] = useState(0)
    
    const incrementone = ()=>{
        setcounterone(counterone + 1)
    }
    const incrementtwo = ()=>{
        setcountertwo(countertwo + 1)
    }
    const Iseven = ()=>{
       return counterone % 2 === 0
    }


  return (
    <div>
        <div>
            <button onClick={incrementone}>Incrementone {counterone}</button>
            <span> {Iseven() ? `even` :`odd`}</span>
        </div>
        <div>
            <button onClick={incrementtwo}>Incrementtwo {countertwo}</button>
        </div>

    </div>
  )
}

export default CounterOne
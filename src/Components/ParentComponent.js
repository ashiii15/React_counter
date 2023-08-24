import React,{useState} from 'react'
import Title from './Title'

function ParentComponent() {
    const [age,setage] = useState (25)
    const [salary,setsalary] = useState(50000)
  return (
    <div>
        <Title></Title>
        <div>Age - {age}
        console.log(age);
        </div>
        <button onClick={()=>setage(age + 1)} >Increment age</button>
        <div>Salary - {salary}</div>
        <button onClick={()=>setsalary( salary + 150000)}>Increment salary</button>
        
    </div>
  )
}

export default ParentComponent
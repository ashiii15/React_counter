import React,{useState} from 'react'

function HookcounterThree() {
    const [name,myName] = useState({firstName: "", lastName: ""})
  return (
    <div>
        <form>
            <input type='text' value={name.firstName} onChange={(e)=>myName({...name,firstName : e.target.value})}></input>
            <input type='text' value={name.lastName} onChange={(e)=>myName({...name,lastName : e.target.value})}></input>
        <h2>The FirstNmae is {name.firstName}</h2>
        <h2>The LastName is {name.lastName}</h2>

        </form>
    </div>
  )
}

export default HookcounterThree
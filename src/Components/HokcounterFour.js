import React,{useState} from 'react'

function HokcounterFour() {
    const [items,setItems] = useState([])
    const addItems =()=>{
        setItems([...items,{
            id : items.length,
            value : Math.floor(Math.random()*10) +1
        }
        ])
    

    }

  return (
    <div>
        <button onClick={addItems}>Adding items</button>
        <ul>
            {
                items.map(item=>
                    <li key={item.id}>{item.value}</li>
                    )
             
            }
        </ul>
    </div>
  )
}

export default HokcounterFour
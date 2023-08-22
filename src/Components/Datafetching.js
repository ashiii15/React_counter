import axios from 'axios'
import React,{useState,useEffect} from 'react'

function Datafetching() {
    const [data,fetchingData] = useState([])
    const [id,setid] = useState(1)
    const [ idFrombtnClick, setidfrombtnclick] =useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((Response)=>{
            console.log(Response);
            fetchingData(Response.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[idFrombtnClick])
     const clickHandler = ()=>{
        setidfrombtnclick(id)
    }
  return (
    <div>
        <input value={id} onChange={(e)=>setid(e.target.value)}></input>
        <button value={idFrombtnClick} onClick={clickHandler}>fetching btn</button>
        <h1>{data.title}</h1>

        {/* <ul>
            {
                datas.map((data)=>(
                    <li key={data.id}>{data.title}</li>
                ))
            }
        </ul> */}
    </div>
  )
}

export default Datafetching
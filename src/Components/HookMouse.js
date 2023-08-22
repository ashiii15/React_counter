import React,{useState,useEffect} from 'react'

function HookMouse() {
    const [x, usex] = useState(0);
    const [y,usey] = useState(0)
  var  mousePosition = ((e)=>{
        usex(e.clientX);
        usey(e.clientY);
    })
    useEffect(()=>{
        console.log('mouse moves')
        window.addEventListener("mousemove",mousePosition)
        return (()=>{
            window.removeEventListener("mousemove",mousePosition)
        })
    },[])

  return (
    <div>
        X{x} - Y {y}-
    </div>
  )
}

export default HookMouse
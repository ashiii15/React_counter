import React,{useEffect,useRef} from "react";
function FocusRef (){
   const refVariable =  useRef(null)
    useEffect(()=>{
        refVariable.current.focus()
    })
    return (
        <div>
            <input ref={refVariable} type="text"></input>
        </div>
    )
}
export default FocusRef
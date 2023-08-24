import axios from 'axios'
import React,{useEffect,useReducer} from 'react'

const initialState = {
    loading : true,
    error : "",
    post :{}
}
const reduce = (state, action)=>{
    switch (action.type){
        case 'Fetching succeesful':
        return {
            loading : false,
            error : "",
             post : action.payload

        }
        case 'Fetech error':
            return {
                loading : false,
                error : "something went wrong",
                post :{}
            }
    }

}


function DatafetchingOne() {
  const [state,dispatch] =  useReducer(reduce,initialState)
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((response)=>{
        dispatch({type : 'Fetching succeesful' ,payload : response.data })
    })
    .catch((err)=>{
        dispatch({type : 'Fetech error' })
    })
  },[])
  return (
    <div>
        {
         state.loading ? `loading` : state.post.title

        }
        {
           state. error ? `error` : null 
        }
    </div>
  )
}

export default DatafetchingOne
import React from 'react'
import { UseContex } from './App'

function ComponentF() {
  return (
    <div>
      <UseContex.Consumer>
        {
          user =>{
          //  return <div>{user}</div>
          }
        }
      </UseContex.Consumer>
        
    </div>
  ) 
}

export default ComponentF
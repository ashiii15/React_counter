import React,{useContext} from 'react'
import ComponentF from './ComponentF'

function ComponentE() {
  const user = useContext(useContext)
  return (
    <div>
        <ComponentF>
          {user}
        </ComponentF>
    </div>
  )
}

export default ComponentE
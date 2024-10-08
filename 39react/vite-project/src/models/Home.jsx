import React from 'react'
import { useParams } from 'react-router-dom'

function  Home() {
    var {id}=useParams();
  return (
    <div>
      hello
    </div>
  )
}

export default  Home
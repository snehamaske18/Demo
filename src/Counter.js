import React, { useState } from 'react'

function Counter() {

    let [counter, setcounter]=useState(0)
  return (
    <div>

<h1>{counter}</h1>
<button onClick={()=>{setcounter(counter=counter+1)}}>Increment</button>
    </div>
  )
}

export default Counter
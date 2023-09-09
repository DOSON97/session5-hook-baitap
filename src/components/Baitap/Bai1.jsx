import React, { useState } from 'react'

function Bai1() {
    const [number,setNumber] = useState(0)
  return (
    <div>
        <h2>Bai 01</h2>
        <p>bạn đã click {number} lần</p>
        <button onClick={()=>setNumber(number +1)}>click để tắng số lần click</button>
    </div>
  )
}

export default Bai1
import React, { useState } from 'react'

function Bai2() {
    const[ text, setText ] = useState(" ")
    
    const handleChange =(event) =>{
      
       setText(event.target.value.length)
        console.log(text);
    }
  return (
    <div>
        <h2>Bai 02</h2>
       <textarea type="text" onChange={handleChange} />
        <p>số ký tự là:{text}</p>
    </div>
  )
}

export default Bai2
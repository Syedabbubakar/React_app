import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("irhan");

    useEffect(()=>{
        console.log("Mount..", count);
        console.log("mount", name);
    })
  return (
    <div>
        <h1>{count}</h1>
        <h1>{name}</h1>
        <button onClick={()=> setCount(count + 1)}>Count</button>
        <button onClick={()=> setName("syed")}>Change</button>
    </div>
  )
}

export default Effect
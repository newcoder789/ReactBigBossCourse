import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const BasicEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log('useEffect');
        document.title= `Title Changes:`+count;
    },[count])
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default BasicEffect
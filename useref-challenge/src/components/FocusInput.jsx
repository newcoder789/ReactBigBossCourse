import React from 'react'
import { useRef } from 'react'

const FocusInput = () => {
    const inputRef = useRef();
  return (
    <div>
        <input type="text" placeholder='Type What You want' ref={inputRef} />
        <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  )
}

export default FocusInput
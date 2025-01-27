import React from 'react'

const Person = (props) => {
  return (
    <div>
        <h2>Hello {props.name}!</h2>
        <p>U are {props.age} years old.</p>
    </div>
  )
}

export default Person
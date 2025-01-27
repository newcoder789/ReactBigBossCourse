import React from 'react'

const Map = () => {

    const users =[{ id: 1, name: "Alice", age: 25},
                { id: 2, name: "Bob", age: 30},
                { id: 3, name: "Charlie", age: 22}
            ]
  return (
    <div>
        <h2 style={{color:"cyan"}}>Rendereing using maps </h2>
        {users.map((student)=>(
            <ul>
                <li key={student.id}>Student Id: {student.id}</li>
                <li key={student.name}>Student Name: {student.name}</li>
                <li key={student.age}>Student Age: {student.age}</li>
            </ul>
        ))}
    </div>
  )
}

export default Map
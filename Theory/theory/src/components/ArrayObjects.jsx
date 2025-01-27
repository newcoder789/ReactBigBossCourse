import React from 'react'
import { useState } from 'react'

const ArrayObjects = () => {
    const [movies, setMovies] = useState([
        {id:1, name:"Spiderman"},
        {id:2, name:"Batman"}
    ])

    const handleClick =()=>{
      setMovies(
        movies.map((m)=>(m.id===1?{...movies,name:"John Wick 4"}:m))
      )
    }
  return (
    <div>
        {movies.map(m=>(
          <li key={m.id}>{m.name}</li>
        ))}
        <button onClick={handleClick}>Change Movie</button>
    </div>
  )
}

export default ArrayObjects
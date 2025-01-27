import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicEffect from './components/BasicEffect'
import FetchDataEffect from './components/FetchDataEffect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BasicEffect/>
      <FetchDataEffect/>
    </>
  )
}

export default App

import { useState } from 'react'
import FocusInput from "./components/FocusInput"
import './App.css'
import Timer from './components/Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Timer/>
      <FocusInput/>

    </>
  )
}

export default App

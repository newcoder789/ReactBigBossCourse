import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchComponent from './components/FetchComponent'
import FormComponent from './components/FormComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FetchComponent/>
      <FormComponent/>
    </>
  )
}

export default App

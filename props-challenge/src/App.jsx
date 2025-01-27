import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from './components/Person'
import Product from './components/Product'

function App() {
  return (
    <>
    <Person name="Aryan Dixt" age={19}/>
    <Product name="Laptop" price={150}/>
    </>
  )
}

export default App

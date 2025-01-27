import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import ShoppingList from './components/ShopingList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Counter/> */}
    {/* <TodoList/> */}
    <ShoppingList/>
    </>
  )
}

export default App

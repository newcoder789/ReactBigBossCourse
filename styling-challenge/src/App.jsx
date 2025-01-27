import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './components/ProfileCard'
import StyledCards from './components/StyledCards'
import IconComponents from './components/IconComponents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProfileCard/>
      <StyledCards/>
      <IconComponents/>
    </>
  )
}

export default App

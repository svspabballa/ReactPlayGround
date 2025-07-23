import { useState } from 'react'
import './App.css'
import MyButton from './components/MyButton.jsx'

function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => setCount(count + 1)

  return (
    <>
      <MyButton counter={count} onClickEvent={handleClick}/>
       <MyButton counter={count}/>
    
    </>
  )
}

export default App

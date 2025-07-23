import { useState } from 'react'
import './App.css'
import MyButton from './components/MyButton.jsx'
import ToggleSwitch from './ToggleSwitch.jsx'

function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => setCount(count + 1)
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
     <div>
      <ToggleSwitch
        id="unique-toggle"
        checked={isToggled}
        onChange={setIsToggled}
        // label= "Toggle me"
      />
    </div>
      <MyButton counter={count} onClickEvent={handleClick}/>
       <MyButton counter={count}/>
    
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [typeOfColor, setTypeOfColor] = useState("hex")
  const [color,setcolor]= useState("#000000");

  return (
    <>
    <div
    style={{width:"100vw",height:"100vh",background:color}}>
      <button>Create Hex Color</button>
      <button>Create RBG Color</button>
      <button>Generate Ramdom Color</button>
    </div>
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [typeOfColor, setTypeOfColor] = useState("hex")
  const [color,setcolor]= useState("#000000");

  function ramdomutility(length){
    return Math.floor(Math.random()*length)
  }

  function handleCreateRandomHexColor(){
    const hex=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let hexColor="#";
    for(let i=0;i<6;i++){
        hexColor+=hex[ramdomutility(hex.length)];
    }
  //  console.log(hexColor);
setcolor(hexColor)
  }

  function handleCreateRandomRgbColor(){
    const r=ramdomutility(256);
    const g=ramdomutility(256);
    const b=ramdomutility(256);
    setcolor(`rgb${r},${g},${b}`)
    console.log(`rgb${r},${g},${b}`);
    }

    useEffect(()=>{
      if(typeOfColor==="rgb")handleCreateRandomRgbColor();
      else handleCreateRandomHexColor();
    },[typeOfColor]);
   



  return (
    <>
    <div
    style={{width:"100vw",height:"100vh",background:color}}>
      <button onClick={()=>setTypeOfColor('hex')}>Create Hex Color</button>
      <button onClick={()=>setTypeOfColor('rgb')}>Create RBG Color</button>
      <button onClick={typeOfColor==='hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Ramdom Color</button>
    </div>
    </>
  )
}

export default App

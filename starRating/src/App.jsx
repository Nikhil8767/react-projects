import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {FaStar} from 'react-icons/fa'

function App({nofostars=5}) {
  const [rating,setRating] = useState(0)
  const[hover,setHover]=useState(0)

  function handleClick(getCurrentIndex){
    setRating(getCurrentIndex);
  }
  function onMouseEnter(getCurrentIndex){
    setHover(getCurrentIndex);
  }
  function onMouseLeave(){
    setHover(rating);
  }

  return (
    <>
      <div className="star-rating">
        {
          [...Array(nofostars)].map((_,index)=>{
            index +=1
            return <FaStar
            key={index}
            className={index<=(hover || rating)? 'active':'inactive'}
            onClick={()=>handleClick(index)}
            onMouseMove={()=>{onMouseEnter(index)}}
            onMouseLeave={()=>{onMouseLeave(index)}}
            size={40}
            />
          })
        }
      </div>
    </>
  )
}

export default App

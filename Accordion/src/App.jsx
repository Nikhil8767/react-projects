import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import data from './data'

import './App.css'

function App() {
  const [selected, setSelected] = useState(null)
  const [selectMultiSelection,setMultiSelection]=useState(false)
  const [multi,setmulti]=useState([])

  function handleSingleSelection(getCurrentId){
    setSelected(getCurrentId===selected ? null :getCurrentId)
    console.log(setSelected)
  }

  function handleMultipleSeletion(getCurrentId){
    let cpyMultiple=[...multi];
    const findIndexof=cpyMultiple.indexOf(getCurrentId);
    if(findIndexof===-1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexof,1)
    setmulti(cpyMultiple)
  }

  return (
    <>
     <div className='wrapper'>
      <button onClick={()=>setMultiSelection(!selectMultiSelection)}>
         {selectMultiSelection ? handleSingleSelection : handleMultipleSeletion}
        enable multiple selection</button>
            <div className='accordion'>
                {
                    data && data.length > 0 ?
                    data.map((dataItem)=>(
                        <div className='item' >
                            <div onClick={setMultiSelection 
                              ? ()=>handleMultipleSeletion(dataItem.id)
                              :()=>handleSingleSelection(dataItem.id)
                              }
                                className='title'>
                                <h3>{dataItem.question}</h3>
                                <span className='span'>+</span>
                                <div>
                                {
                                  selectMultiSelection ?
                                  multi.indexOf(dataItem.id)!==-1 &&(
                                    <div className='content'>{dataItem.answer}</div>
                                  ):selected===dataItem.id &&(
                                    <div className='content'>{dataItem.answer}</div>
                                  )
                                }
                                  {/* {
                                  selected===dataItem.id || multi.indexOf(dataItem.id)!==-1 ?(
                                    <div className='content'>{dataItem.answer}</div>
                                  ) 
                                  
                                  :null
                                  } */}
                                  </div>
                            </div>
                        </div>
                    ))
                    :<div>No data found</div>

                }
                
            </div>
        </div>
    </>
  )
}

export default App

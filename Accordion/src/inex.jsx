import { useState } from 'react'
import data from './data.js'
export default function Accordiaon(){
    cosnt[selected,setSelected]=useState(null)

    return(
        <div className='wrapper'>
            <div className='accordion'>
                {
                    data && data.length > 0 ?
                    data.map((dataItem)=>(
                        <div className='item'>
                            <div className='title'>
                                <h3>{DataItem.question}</h3>
                                <span>+</span>
                            </div>
                        </div>
                    ))
                    
                    
                    :<div>No data found</div>

                }
                
            </div>
        </div>
    )
}
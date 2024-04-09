import React from 'react'
import './phoneList.css'
import { useState } from 'react'
import PhoneInfo from './phoneInfo'

function PhoneList({info}) {
    const [open, setOpen] = useState(false)

    function handleOpen() {
        setOpen(!open)
    }
  return (
    <div className='main-div'>
        {info.map((item) => (
            (open) ? <PhoneInfo key={item.id} item={item} handleOpen={handleOpen(item.id)} /> :
            <div 
                className='main-phone'
                onClick={handleOpen}
                key={item.id}
                >
                {item.name}
                <hr />
            </div>
            
        ))}
    </div>
  )
}

export default PhoneList
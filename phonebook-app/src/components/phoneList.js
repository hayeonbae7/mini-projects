import React from 'react'
import './phoneList.css'
import PhoneInfo from './phoneInfo'

function PhoneList({info}) {
  return (
    <div className='main-div'>
        {info.map((item) => (
            <div className='main-phone'>
                {item.name}
                <hr />
            </div>
        ))}
    </div>
  )
}

export default PhoneList
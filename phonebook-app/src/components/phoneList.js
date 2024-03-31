import React from 'react'
import './phoneList.css'
import PhoneInfo from './phoneInfo'

function PhoneList() {
  return (
    <div className='main-div'>
        <PhoneInfo />
        <PhoneInfo />
        <PhoneInfo />
    </div>
  )
}

export default PhoneList
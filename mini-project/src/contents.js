import React, { useState } from 'react'
import Event from './components/event'
import ManFashions from './components/Manfashions'
import WomanFashions from './components/Womanfashions'
import Life from './components/life'

function Contents() {
    const [components, setComponents] = useState("")
  return (
    <div>
        <main>
            <ul className='main-header'>
            <li>혜택&이벤트</li>
            <li>우먼</li>
            <li>맨</li>
            <li>라이프</li>
            </ul>
        </main>
        <Event />
        <WomanFashions />
        <ManFashions />
        <Life />
    </div>
  )
}

export default Contents
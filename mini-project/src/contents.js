import React from 'react'
import Event from './components/event'
import Fashionaccessories from './components/fashionaccessories'
import Fashions from './components/fashions'
import Life from './components/life'

function Contents() {
  return (
    <div>
        <main>
            <ul className='main-header'>
            <li>혜택&이벤트</li>
            <li>패션</li>
            <li>잡화</li>
            <li>라이프</li>
            </ul>
        </main>
        <Event />
        <Fashions />
        <Fashionaccessories />
        <Life />
    </div>
  )
}

export default Contents
import React, { useState } from 'react'
import Event from './components/event'
import ManFashions from './components/Manfashions'
import WomanFashions from './components/Womanfashions'
import Life from './components/life'

function Contents() {
    const [components, setComponents] = useState(1)
    function handleOpen() {

    }
    return (
        <div>
            <main>
                <ul className='main-header'>
                <li onClick={handleOpen}>혜택&이벤트</li>
                <li onClick={handleOpen}>우먼</li>
                <li onClick={handleOpen}>맨</li>
                <li onClick={handleOpen}>라이프</li>
                </ul>
            </main>
            {components === 1? 
                <Event /> : 
                (components === 2)? 
                    <WomanFashions /> :
                    (components === 3)?
                        <ManFashions /> :
                        (components === 4)?
                            <Life /> : null}
        </div>
    )
}

export default Contents
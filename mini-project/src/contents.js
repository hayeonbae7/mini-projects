import React, { useState } from 'react'
import Event from './components/event'
import ManFashions from './components/Manfashions'
import WomanFashions from './components/Womanfashions'
import Life from './components/life'


function Contents() {
    const [components, setComponents] = useState(1)
    function handleOpenEvent() {
        setComponents(1);
    }
    function handleOpenWoman() {
        setComponents(2);
    }
    function handleOpenMan() {
        setComponents(3);
    }
    function handleOpenLife() {
        setComponents(4);
    }

    return (
        <div>
            <main>
                <ul className='main-header'>
                    <li onClick={handleOpenEvent}>혜택&이벤트</li>
                    <li onClick={handleOpenWoman}>우먼</li>
                    <li onClick={handleOpenMan}>맨</li>
                    <li onClick={handleOpenLife}>라이프</li>
                </ul>
                
                {components === 1? 
                <Event /> : 
                (components === 2)? 
                    <WomanFashions /> :
                    (components === 3)?
                        <ManFashions /> :
                        (components === 4)?
                            <Life /> : null}
            </main>
        </div>
    )
}

export default Contents
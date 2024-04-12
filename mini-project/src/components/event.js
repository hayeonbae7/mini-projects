import React from 'react'
import './event.css'

function Event() {
  return (
    <div>
        <div className='benefit-banner'>
            <h5>
                BENEFIT
            </h5>
            <h1>
                봄 세일<br/>
                12% 할인 쿠폰
            </h1>
            <img 
                src='https://img.29cm.co.kr/next-edition/2023/03/08/60f702a8a6b845e099ec9963f5097af0_20230308150124.png?width=2083&q=90'
                className='coupon'
                alt='12% 쿠폰'/>
        </div>
    </div>
  )
}

export default Event
import React, { useState } from 'react'
import './event.css'

function Event() {
    const [open, setOpen] = useState(false);

    function handleOpen() {
        setOpen(!open);
    }
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
                alt='12% 쿠폰'
                onClick={handleOpen}/>
        </div>

        {open && (
            <div className='modal'>
                <h3 className='modal-content'>로그인이 필요합니다.<br/> 로그인을 하시겠습니까?</h3>
                <div className='modal-button'>
                    <button 
                        onClick={handleOpen}
                        className='button-close'>
                        취소
                    </button>
                    <button 
                        onClick={handleOpen}
                        className='button-open'>
                        확인
                    </button>
                </div>
            </div>
        )}
    </div>
  )
}

export default Event
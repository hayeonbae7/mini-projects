import React from 'react'

function PhoneInfo({item, handleOpen}){
  return (
    
    <div>
        <div>
            이름: {item.name}
        </div>
        <div>
            번호: {item.number}
        </div>
        <button>수정</button>
        <button onClick={handleOpen}>확인</button>
    </div>
  )
}

export default PhoneInfo
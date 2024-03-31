import React from 'react'
import './addPhone.css'

function AddPhone({
    name,
    setName,
    number,
    setNumber,
    handleCreate}) {
    return (
        <div>
            <h1>새로운 연락처</h1>
            <div className='add-phone'>
                <div>
                    이름:
                    <input 
                        type='text' 
                        placeholder='이름을 입력하세요.'
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    번호:
                    <input 
                        type='phone' 
                        placeholder='번호를 입력하세요.'
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        required />
                </div>
                <button onClick={handleCreate}>저장</button>
            </div>
        </div>
  )
}

export default AddPhone;
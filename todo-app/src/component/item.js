import React from 'react'

function Item({todoList, handleDelete, handleUpdate}) {
  return (
    <div>
      {todoList.map((item) => (
            <div className='todo_item'>
                <div>{item.text}</div>
                <div className='button_list'>
                    <button 
                        className='update_item'
                        onClick={handleUpdate}>
                        수정
                    </button>
                    <button 
                        className='delete_item'
                        onClick={() => handleDelete(item.id)}>
                        삭제
                    </button>
                </div>
            </div>
      ))}
      
    </div>
  )
}

export default Item
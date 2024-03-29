import React from 'react'

function Item({todoList}) {
  return (
    <div>
      {todoList.map((item) => (
          <div className='todo_item'>{item}</div>
      ))}
    </div>
  )
}

export default Item
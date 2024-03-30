import Item from './item'
import './itemList.css'
import React from 'react'

function ItemList({todoList, handleDelete, handleUpdate}) {
  return (
    <div>
      <Item 
        todoList = {todoList} 
        handleDelete = {handleDelete}
        handleUpdate = {handleUpdate} />
    </div>
  )
}

export default ItemList
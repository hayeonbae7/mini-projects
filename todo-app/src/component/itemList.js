import Item from './item'
import './itemList.css'
import React from 'react'

function ItemList({todoList, edit, handleDelete, handleUpdate}) {
  return (
    <div>
      <Item 
        todoList = {todoList} 
        edit={edit}
        handleDelete = {handleDelete}
        handleUpdate = {handleUpdate} />
    </div>
  )
}

export default ItemList
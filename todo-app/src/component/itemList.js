import Item from './item'
import './itemList.css'
import React from 'react'

function ItemList({todoList}) {
  return (
    <div>
      <Item todoList ={todoList}/>
    </div>
  )
}

export default ItemList
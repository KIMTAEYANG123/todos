import React,{useEffect,useState} from 'react'
import TodoItem from "./TodoItem";

const TodoItemList = ({todos,onRemove,onToggle})=>{
    


    const todosList = todos.map( (todo)=>(
        <TodoItem {...todo} key ={todo.id} onRemove={onRemove} onToggle={onToggle} ></TodoItem>
    ))
    console.log(todosList)
    return(
        <div>
            {todosList}
        </div>
    )
}

export default TodoItemList;
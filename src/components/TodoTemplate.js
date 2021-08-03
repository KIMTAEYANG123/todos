import React from 'react'
import './TodoTemplate.css';


const TodoTemplate = (props)=>{
    
    return(
        <div className="todo-list-template">
            <div className="title">
                오늘 할 일
            </div>
            <section className="color-list">
                {props.palette}
            </section>
            <section className="form-wrapper">
                {props.form}
            </section>
            <section className="todos-wrapper">
                {props.todoItemList}
            </section>
        </div>
    )
}

export default TodoTemplate;
import React from 'react';
import './TodoItem.css';

const TodoItem =({id,text,checked,onRemove,onToggle,color})=>{

    return (
        <div className="todo-item" onClick={()=>{
            onToggle(id)
        }}>
            <div className="remove" onClick={(e)=>{  e.stopPropagation(); //부모태그의 이벤트 전파를 멈추라는 의미 todo-item이라는 클래스이름에 온클릭이벤트가 있으므로 그걸 중지 시킴
                onRemove(id) }}>
                &times;
            </div>
            <div style={{color:color}} className={`todo-text ${checked && 'checked'}`}>
                <div>{text}</div>
            </div>
            {
            checked && (<div className="check-mark">✓</div>)
            }
      </div>
    )
}

export default TodoItem;
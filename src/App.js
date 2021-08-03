import React, { Component }  from 'react';
import TodoTemplate from './components/TodoTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList'
import Palette from './components/Palette';


const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class App extends Component {

  constructor(props){
    super(props);
    this.id = 3;
    this.state = {
      todos : [
        {id:0,text:'리액트 소개',checked: false},
        {id:1,text:'리액트',checked: true},
        {id:2,text:'리액트 소개',checked: false},
      ],
      color: '#343a40',
    }
  }

  clickHandler = (input)=>{
    const color = this.state.color;

    this.setState({
      todos : this.state.todos.concat({
        id:this.id++,
        text:input,
        checked:false,
        color
      })
    })
    console.log(this.state.todos)
  }

  handleColor = (color)=>{
    this.setState({
       color
    })
  }
  handleRemove = (id)=>{
    this.setState({
      todos: this.state.todos.filter( todo => todo.id!== id)
    })
  }
  
  handleToggle = (id)=>{
    const {todos} = this.state;

    const idx = todos.findIndex( todo => id === todo.id)
    const selected = todos[idx];

    //배열을 복사해서 만듦
    //원본을 바꾸는 것 보다 이렇게 하는 것이 좋음
    const newTodos = [...todos]
    newTodos[idx] = {
      ...selected,
      checked : !selected.checked
    }

    this.setState({
      todos : newTodos
    })
  }

  render(){
    const todos = this.state.todos;
    const color = this.state.color;
    console.log(todos)
    return (
      <TodoTemplate form={(<Form clickHandler={this.clickHandler} color={color}/>)} 
      todoItemList={(<TodoItemList todos={todos} onRemove ={this.handleRemove} onToggle ={this.handleToggle}/>)}
      palette={(<Palette colors={colors} selected={color} onSelect={this.handleColor}/>)}>
        
      </TodoTemplate>
    );
  }
}

export default App;

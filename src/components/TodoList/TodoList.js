import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
import './TodoList.css'
import { CSSTransition, TransitionGroup } from "react-transition-group";

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos : []
        }

        this.addTodo    = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.editTodo   = this.editTodo.bind(this)
        this.toggleTodo = this.toggleTodo.bind(this)
    }

    removeTodo(todoID){
        this.setState(st => ({
			todos : st.todos.filter(todo => todo.id !== todoID)
		}))
    }

    addTodo(todo){
        this.setState(st => {
            return {
                todos : [...st.todos, todo]
            }
        })
    }

    editTodo(newTodo){
        let todos = [...this.state.todos]

        let itemIndex = todos.findIndex(todo => todo.id === newTodo.id)

        todos[itemIndex] = newTodo

        this.setState({
            todos: todos
        })
    }

    toggleTodo(todoID){
        let todos = [...this.state.todos]

        let itemIndex = todos.findIndex(todo => todo.id === todoID)

        todos[itemIndex].isComplete = !todos[itemIndex].isComplete

        this.setState({
            todos: todos
        })
    }

    render(){
        const todos = this.state.todos.map(todo => {
            return (
                <CSSTransition key={todo.id} timeout={500} classNames='todo'>
                    <Todo
                        key = {todo.id}
                        id = {todo.id}
                        todo = {todo.todo}
                        isComplete = {todo.isComplete}
                        removeTodo = {this.removeTodo}
                        editTodo   = {this.editTodo}   
                        toggleTodo = {this.toggleTodo}  
                    />
                </CSSTransition>
            )
        })
        return(
            <div className="TodoList">
                <h1>React Todo List</h1>
                <span>Yasin OSMAN - 2020</span>
                <NewTodoForm addTodo={this.addTodo}/>
                <ul>
                    <TransitionGroup className='todo-list'>
                        {todos}
                    </TransitionGroup>
                </ul>
            </div>
        )
    }
}

export default TodoList
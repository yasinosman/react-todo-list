import React, { Component } from 'react'
import {FaPen, FaTrash} from 'react-icons/fa'
import './Todo.css'
import { CSSTransition, TransitionGroup } from "react-transition-group";

class Todo extends Component{
    constructor(props){
        super(props)
        this.state = {
            isEditing   : false,
            newTodo     : ''
        }

        this.handleDelete   = this.handleDelete.bind(this)
        this.handleChange   = this.handleChange.bind(this)
        this.handleEdit     = this.handleEdit.bind(this)
        this.handleEditClick= this.handleEditClick.bind(this)
        this.handleToggle   = this.handleToggle.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleEdit(e){
        e.preventDefault()
        const newTodo = {
            todo        : this.state.newTodo,
            id          : this.props.id,
            isComplete  : this.props.isComplete
        }

        this.setState({
            newTodo     : '',
            isEditing   : false
        })

        this.props.editTodo(newTodo)
    }

    handleDelete(e){
        this.props.removeTodo(this.props.id)
    }

    handleEditClick(e){
        this.setState(st => ({
            isEditing : !st.isEditing
        }))
    }

    handleToggle(){
        this.props.toggleTodo(this.props.id)
    }

    render(){
        let result
        if(this.state.isEditing){
            result = (
                <CSSTransition key='editing' timeout={500} classNames='form'>
                    <form onSubmit={this.handleEdit} className='Todo-edit-form'>
                        <label htmlFor="newTodo">Edit Todo</label>
                        <input 
                            type="text" 
                            name="newTodo" 
                            id="newTodo"
                            value={this.state.todo}
                            onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </CSSTransition>
            )
        } else {
            result = (
                <CSSTransition key='normal' timeout={500} classNames='task-text'>
                    <li 
                        className='Todo-task'
                        onClick = {this.handleToggle}
                    >
                        {this.props.todo}
                    </li> 
                </CSSTransition>
            )
        }
        return (
            <TransitionGroup
                className={this.props.isComplete ? "Todo completed" : "Todo"}
            >
                {result}
                <div className='Todo-buttons'>
                    <button onClick ={this.handleEditClick}>
                        <FaPen/>
                    </button>
                    <button onClick ={this.handleDelete}>
                        <FaTrash/>
                    </button>
                </div>
            </TransitionGroup>
        )
    }
}

export default Todo
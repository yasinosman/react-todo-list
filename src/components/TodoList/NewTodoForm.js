import React, { Component } from 'react'
import {v4 as uuid} from 'uuid'
import './NewTodoForm.css'

class NewTodoForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            todo : ''
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const newTodo = {
            todo : this.state.todo,
            isComplete : false,
            id : uuid()
        }
        this.props.addTodo(newTodo)

        this.setState({todo : ""})
    }

    render(){
        return(
            <div className="NewTodoForm">
                <form onSubmit={this.handleSubmit} className='NewTodoForm'>
                    <label htmlFor="todo">Todo</label>
                    <input 
                        type="text" 
                        name="todo" 
                        id="todo" 
                        placeholder='Do laundry'
                        value={this.state.todo}
                        onChange={this.handleChange}
                    />
                    <button>Add Todo</button>
                </form>
            </div>
        )
    }
}

export default NewTodoForm
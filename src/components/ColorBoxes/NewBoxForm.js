import React, { Component } from "react"
import {v4 as uuid} from 'uuid'

class NewBoxForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            boxWidth    : 0,
            boxHeight   : 0,
            boxColor    : '',
            boxID       : uuid()
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
        const newBox = {
            width   : this.state.boxWidth,
            height  : this.state.boxHeight,
            color   : this.state.boxColor,
            id      : uuid()
        }
        return this.props.addBox(newBox)
    }

	render() {
		return (
			<div className="NewBoxForm">
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="boxWidth">Width:</label>
                    <input 
                        type="number" 
                        name="boxWidth" 
                        id="boxWidth" 
                        value={this.state.boxWidth} 
                        onChange={this.handleChange}
                    />

					<label htmlFor="boxHeight">Height:</label>
                    <input 
                        type="number" 
                        name="boxHeight" 
                        id="boxHeight" 
                        value={this.state.boxHeight} 
                        onChange={this.handleChange}
                    />

					<label htmlFor="boxColor">Color:</label>
                    <input 
                        type="text" 
                        name="boxColor" 
                        id="boxColor" 
                        value={this.state.boxColor} 
                        onChange={this.handleChange}
                    />
					<button>Create Box!</button>
				</form>
			</div>
		)
	}
}

export default NewBoxForm

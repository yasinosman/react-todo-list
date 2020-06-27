import React, { Component } from "react"
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"

class BoxList extends Component {
	constructor(props){
		super(props)
		this.state = {
			boxes : []
		}
		this.addBox = this.addBox.bind(this)
		this.removeBox = this.removeBox.bind(this)
	}

	addBox(newBox){
		this.setState(st => ({
			boxes: [...st.boxes, newBox]
		}))
	}

	removeBox(boxID){
		this.setState(st => ({
			boxes : st.boxes.filter(box => box.id !== boxID)
		}))
	}

	render() {
		const boxes = this.state.boxes.map(box => {
			return (
				<Box
					key={box.id}
					id={box.id}
					removeBox={this.removeBox}
					boxWidth={box.width}
					boxHeight={box.height}
					boxColor={box.color}
				/>
			)
		})
		return (
			<div className="BoxList">
				<NewBoxForm addBox={this.addBox}/>
				{boxes}
			</div>
		)
	}
}

export default BoxList

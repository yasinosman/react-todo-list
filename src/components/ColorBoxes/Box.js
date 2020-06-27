import React, { Component } from "react"

class Box extends Component {
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.props.removeBox(this.props.id)
    }

    render(){
        return (
            <div 
                className="Box" 
                style={{
                    width:`${this.props.boxWidth}px`, 
                    height:`${this.props.boxHeight}px`, 
                    backgroundColor:this.props.boxColor
                }}
            >
                <button onClick={this.handleClick}>Remove Box!</button>
            </div>
        )
    }
}

export default Box

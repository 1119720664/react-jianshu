import React, { Component } from 'react'
import MouthPicker from "./mouth-pick"

export default class Mouth extends Component {
    componentDidMount() {
        console.log(window.$)
    }

    render() {
        return (
            <div>
                <MouthPicker year={2018} month={5}/>
            </div>
        )
    }
}


// //lifecycle of components
import React, { Component } from "react";
export default class Counterr extends Component {
    constructor() {
        super();
        console.log('Constructor fn is called') //called first
    }
    componentDidMount(){
        console.log('ComponentDidMount fn is called') //called third
    }
    render(){
        console.log('Render fn is called') //called second
        return(
            <div>Greeting</div>
        )
    }
}
import react , {Component} from "react";
export default class Contact extends Component{
    constructor(){
        super();
        console.log("Contact Constructor is called")
    }
    componentDidMount(){
        console.log("Contact ComponentDidMount is called")
    }   
    componentWillUnmount(){
        console.log("Contact ComponentWillUnmount is called")
    }
    render(){
        console.log("Contact Render is called")
        return(
            <>
            <h1>Welcome to Contact Page</h1>
            </>
        )
    }
}

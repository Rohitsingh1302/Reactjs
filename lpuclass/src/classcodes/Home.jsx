import react , {Component} from "react";
export default class Home extends Component{
    constructor(){
        super();
    console.log("Home Constructor is called")
    }
    componentDidMount(){
        console.log("Home ComponentDidMount is called")
    }   
    componentWillUnmount(){
        console.log("Home ComponentWillUnmount is called")
    }
    render(){
        console.log("Home Render is called")
        return(
            <>
            <h1>Welcome to Home Page</h1>
            </>
        )
    }
}

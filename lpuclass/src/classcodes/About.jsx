import react , {Component} from "react";
export default class ABout extends Component{
    constructor(){
        super();
    console.log("About Constructor is called")
    }
    componentDidMount(){
        console.log("About ComponentDidMount is called")
    }   
    componentWillUnmount(){
        console.log("AboutComponentWillUnmount is called")
    }
    render(){
        console.log("About Render is called")
        return(
            <>
            <h1>Welcome to About Page</h1>
            </>
        )
    }
}
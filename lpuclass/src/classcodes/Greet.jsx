import {Component} from "react";
class Greet extends Component{
    render(){
        return(
            <>
            <h1>GOOD MORNING</h1>
            </>
        )
    }
}
export default Greet;
//what this code is doing
//This code defines a React class component named "Greet" that extends the base Component class from the React library. The component's render method returns a JSX fragment containing an <h1> element with the text "GOOD MORNING". When this component is rendered in a React application, it will display the greeting message on the screen. Finally, the component is exported as the default export of the module, allowing it to be imported and used in other parts of the application.
///how to use this code
//To use this Greet component in a React application, you would typically import it into another component or your main application file and include it in the JSX. For example:
// import React from "react";
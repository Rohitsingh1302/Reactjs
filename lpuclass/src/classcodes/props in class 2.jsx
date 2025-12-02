function Studentdata2(props){
    return(
        <div>
        <p>Student name is {props.name}, and age is {props.age} and email is {props.email} </p>
        <p>and hobbies are </p>
        <ul>{props.hobbies.map((ele, idx) => <li key={idx}>{ele}</li>)}</ul>
        </div>
    )
}

export default Studentdata2;

//output way:-    
// import Studentdata2 from "./ClassCodes/props in class"
//   <>
//     <Studentdata2 name="rohit" age={21} email="rohit132@gmai.com"
//     hobbies={['reading','coding','playing cricket']} />
//   </>

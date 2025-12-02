function Student(props){
    return(
        <>
        <h1 style={{color:'blue'}}>student name is {props.name} & age is {props.age}</h1>
        </>
    )
}
export default Student;

// output way:- 
//   <>
//     <Student name="rohit" age={21} />
//     <Student name="ram" age={22} />
//     <Student name="raju" age={23} />
//     <Student name="ravi" age={24} />
//  </>


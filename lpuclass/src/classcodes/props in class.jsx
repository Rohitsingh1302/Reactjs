function  Studentdata (props){
    return(
        <>
        <h1>student name is {props.name} & age is {props.age}</h1>
        <p>hobbies:</p>
        <ul>
            <li>i like {props.book} reading</li>
            <li> i like {props.lang} in coding</li>
            <li>i like to play {props.game}</li>
        </ul>
        </>
    )
}
export default Studentdata;

// output ka way:-
//import Studentdata from "./ClassCodes/props in class"
//   <>
//     <Studentdata book="fiction" lang="javascript" game="cricket" name="rohit" age={21} />
//   </>
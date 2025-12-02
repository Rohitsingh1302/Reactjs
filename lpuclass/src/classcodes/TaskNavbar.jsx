//concept: functional compomnent with props in react js
//description: build a navbar component  that takes brandName and a list of links(As an array of strings via props) and displays them in a horizontaly using inline  css.
function TaskNavbar(props){
    return(
        <nav style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px', backgroundColor:'#f0f0f0'}}>
            <div style={{fontWeight:'bold', fontSize:'24px'}}>{props.brandName}</div>
            <div>
                {props.links.map((link, index) => (
                    <a key={index} href={`#${link.toLowerCase()}`} style={{margin:'0 10px', textDecoration:'none', color:'black'}}>
                        {link}
                    </a>
                ))}
            </div>
        </nav>
    )
}
export default TaskNavbar;

//output way:-
// import TaskNavbar from "./ClassCodes/TaskNavbar";
//   <>
//     <TaskNavbar brandName="MyWebsite" links={['Home', 'About', 'Services', 'Contact']} />
//   </>    


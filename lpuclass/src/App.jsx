import useCustomHook from "./classcodes/useCustomHook.jsx";
function App() {
 const { count, increment, decrement } = useCustomHook();
 return (
   <div>
     <button onClick={increment}> + </button>
     <h3>{count}</h3>
     <button onClick={decrement}> - </button>
   </div>
 );
}
export default App;
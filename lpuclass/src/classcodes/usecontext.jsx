import { createContext, useContext } from "react";

// 1️⃣ Context create
const MyContext = createContext();

function Appcontext() {
  const message = "Hello from useContext";

  return (
    // 2️⃣ Provider ke through data pass
    <MyContext.Provider value={message}>
      <Child />
    </MyContext.Provider>
  );
}

function Child() {
  // 3️⃣ Context data use
  const data = useContext(MyContext);

  return (
    <div>
      <h2>useContext Example</h2>
      <p>{data}</p>
    </div>
  );
}

export default Appcontext;

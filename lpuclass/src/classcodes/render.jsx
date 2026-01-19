import { useState } from "react";

function ConditionalRender() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>Conditional Rendering</h2>

      {isLoggedIn ? <p>Welcome User</p> : <p>Please Login</p>}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle
      </button>
    </div>
  );
}

export default ConditionalRender;

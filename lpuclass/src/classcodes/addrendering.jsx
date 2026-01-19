import { useState } from "react";

function AndRendering() {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <div>
      <h2>Logical AND Rendering</h2>

      {showMessage && <p>This message is visible</p>}

      <button onClick={() => setShowMessage(!showMessage)}>
        Toggle Message
      </button>
    </div>
  );
}

export default AndRendering;

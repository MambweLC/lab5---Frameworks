import { useState } from "react";

function WelcomeMessage(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function ToggleMessage() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowMessage(!showMessage)}
        style={{
          padding: "8px 16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          margin: "10px 0",
        }}
      >
        {showMessage ? "Hide Message" : "Show Message"}
      </button>
      {showMessage && <p>Hope you are doing well!</p>}
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <WelcomeMessage name="Student" />
      <ToggleMessage />
    </div>
  );
}

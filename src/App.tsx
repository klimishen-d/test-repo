import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);
  const handleClick = () => setCount(count + 1);

  return (
    <div className="App">
      <button className="App-button" onClick={handleClick}>
        Increment
      </button>

      <p>Count: {count}</p>

      <button onClick={() => setCount(0)} className="App-button">
        Reset
      </button>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as any);
            const formProps = Object.fromEntries(formData);
            console.log(formProps);
            alert("Check the console for the form data");
          }}
        >
          <label
            style={{ display: "flex", flexDirection: "column", width: 300 }}
          >
            Name:
            <input type="text" name="name" />
          </label>

          <div>
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

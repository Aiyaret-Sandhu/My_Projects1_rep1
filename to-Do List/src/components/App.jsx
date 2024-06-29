import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [array, setArray] = useState([]);

  function updateList() {
    if (value.trim() !== "") {
      setArray([...array, value]);
      setValue("");
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      updateList();
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          value={value}
          onKeyDown={handleKeyDown}
          onChange={(event) => setValue(event.target.value)}
        />
        <button onClick={updateList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {array.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

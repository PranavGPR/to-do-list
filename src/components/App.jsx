import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const item = event.target.value;
    setInputText(item);
  }

  const handlePress = (event) => {
    if (event.key === "Enter" || event.keyCode === 13) {
      setItems((prevItems) => {
        return [...prevItems, inputText];
      });
      setInputText("");
    }
  };

  function buttonClick() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          onChange={handleChange}
          value={inputText}
          onKeyDown={handlePress}
        />
        <button onClick={buttonClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((toDoItem, index) => (
            <li key={index}>{toDoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

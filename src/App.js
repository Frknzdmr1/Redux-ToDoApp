import { useState } from "react";
import { Button, Input } from "reactstrap"
import Todo from "./todo"

import store from "./store"
import './App.css';

function App() {
  const [inputValue, setInput] = useState([])

  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const handleClick = () => {
    setInput("")
    store.dispatch({ type: "addTodo", title: inputValue })

  }

  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <Input onChange={handleChange} value={inputValue}
        />
        <Button color='primary' onClick={handleClick}>Add new todo</Button>
      </div>
      <Todo />

    </div>
  );
}

export default App;

import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const addvalue = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };
  const removevalue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="App">
      <h1>Chai aur react</h1>
      <h2>counter value is : {count}</h2>

      <button onClick={addvalue}>Add value</button>
      <button onClick={removevalue}>remove value</button>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Form />
      <ParkingList />
      <Stats />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>💼 far away 🌴</h1>
    </div>
  );
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="add-form">
      <h3>What are you paccking for the trip ✈?</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (v, i) => i + 1).map((num) => (
          <option key={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="text..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>add</button>
    </div>
  );
}

function ParkingList() {
  return (
    <div>
      <ul>
        <Items />
      </ul>
    </div>
  );
}

function Items() {
  return (
    <div>
      <li></li>
    </div>
  );
}

function Stats() {
  return (
    <div className="stats">
      <h3>You have packed X% of the list</h3>
    </div>
  );
}

export default App;

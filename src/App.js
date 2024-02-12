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
  const [items, setItems] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItems = {
      id: Date.now(),
      quantity,
      description,
      packed: false,
    };

    console.log(newItems);
    setItems([...items, newItems]);

    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
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
    </form>
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

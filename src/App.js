import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(newItems) {
    setItems([...items, newItems]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleAddItems} />
      <ParkingList items={items} />
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

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

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

    onAddItems(newItems);

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

function ParkingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Items item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Items({ item }) {
  return (
    <div>
      <li>
        {item.quantity} {item.description} <button>❌</button>
      </li>
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

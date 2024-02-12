import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
    </div>
  );
}

function Header() {
  return <div className="header">💼 far away 🌴</div>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What are you paccking for the trip ✈?</h3>
    </div>
  );
}

export default App;

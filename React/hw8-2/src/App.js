import BulletForm from "./Components/BulletForm";

function App() {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <h1>My React App</h1>
      <BulletForm items={items} />
    </div>
  );
}

export default App;
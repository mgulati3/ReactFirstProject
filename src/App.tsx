import ListGroup from "./Components/ListGroup";

function App() {
  let item = ["New York", "Japan", "Tokyo", "Australia", "United States"];
  return (
    <div>
      <ListGroup items={item} heading="Cities" />
    </div>
  );
}

export default App;

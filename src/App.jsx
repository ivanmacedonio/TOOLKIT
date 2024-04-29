import "./App.css";
import { Form } from "./components/Form";
import { Label } from "./components/Label";
function App() {
  return (
    <>
      <div className="form">
        <h1>REDUX TEST</h1>
        <Label />
        <br />
        <Form />
      </div>
    </>
  );
}

export default App;

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Layer from "./Layer/Layer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Layer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

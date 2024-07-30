import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Layer from "./Layer/Layer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layer />
      </BrowserRouter>
    </>
  );
}

export default App;

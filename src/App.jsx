import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Layer from "./Layer/Layer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1300,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
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

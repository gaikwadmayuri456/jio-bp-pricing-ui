import "./App.css";
import HomePage from "./Components/HomePage";
import Configuration from "./Components/Configuration";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/configuration" element={<Configuration />} />
      </Routes>
    </div>
  );
}
export default App;

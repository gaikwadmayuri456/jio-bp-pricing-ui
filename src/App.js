import "./App.css";
import HomePage from "./Components/HomePage";
import Adddata from "./Components/Adddata";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/configuration" element={<Adddata />} />
        </Routes>
    </div>
  );
}
export default App;

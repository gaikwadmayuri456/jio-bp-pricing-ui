import "./App.css";
import { Routes, Route, useLocation, Navigate, Outlet, Link } from "react-router-dom";
import HomePage from "./Components/HomePage";
// import Apicalling from "./Components/Apicalling"
// import TableData from "./Components/TableData";
// import SliderData from "./Components/SliderData";
// import TableData2 from "./Components/TableData2";
function App() {

  return (
    <div className="App">
     <HomePage></HomePage>
    </div>
  );
}
export default App;
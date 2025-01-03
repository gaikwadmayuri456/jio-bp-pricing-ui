import "./App.css";
import { Routes, Route, useLocation, Navigate, Outlet, Link } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Adddata from "./Components/Adddata";

function App() {

  return (
    <div className="App">
     <HomePage/>
     {/* <Adddata/> */}
    </div>
  );
}
export default App;
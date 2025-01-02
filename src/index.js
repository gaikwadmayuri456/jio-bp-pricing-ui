import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import axios from 'axios';
import App from './App';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import combinedReducer from "./Redux/Reducers/CombinedReducer";
import { configureStore } from "@reduxjs/toolkit";

import reportWebVitals from './reportWebVitals';
axios.defaults.baseURL = "https://icici-bms.energy.smart-iam.com/jio-bp-api/"
const store = configureStore({
  reducer: combinedReducer,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

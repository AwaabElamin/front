import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Login, Register } from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { useState } from 'react';
import { configureStore } from "@reduxjs/toolkit";

function App() {
  const value = configureStore({
    reducer: {
      test: 'test'
    }

  });
  return (
    <div className="App">

      <BrowserRouter>
        <Provider store={value}>
          <header className="App-header">
            <div className="LoginPosition">
              <Login />
            </div>
          </header>

          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </Provider>
      </BrowserRouter>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}
export default App;

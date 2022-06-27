import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Login, Register } from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { useState } from 'react';
import { configureStore } from "@reduxjs/toolkit";
import { AddBook } from './components/Books';
import { Header } from './components/Header';

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
         <Header/>
          
          <Routes>
          {/* <Route path="" element={<App />}></Route> */}
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/book/add" element={<AddBook />}></Route>
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

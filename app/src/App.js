import logo from './logo.svg';
// import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Login, Register } from './components/user';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddBook, UpdateBook } from './components/Books';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
         <Header/>
          
          <Routes>
            <Route exact path="/" element={''}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/book/add" element={<AddBook />}></Route>
            <Route path="/book/update" element={<UpdateBook />}></Route>
          </Routes>
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

import logo from './logo.svg';
// import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { GetAllUsers, Login, Register } from './components/users';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddBook, GetAllBooks, UpdateBook } from './components/Books';
import { Header } from './components/Header';
import { BorrowBook } from './components/Borrow';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
         <Header/>
          
          <Routes>
            <Route exact path="/" element={''}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/users" element={<GetAllUsers />}></Route>
            <Route path="/book" element={<GetAllBooks />}></Route>
            <Route path="/book/add" element={<AddBook />}></Route>
            <Route path="/book/update" element={<UpdateBook />}></Route>
            <Route path="/borrow/add" element={<BorrowBook />}></Route>
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

import logo from './logo.svg';
// import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { GetAllUsers, Login, Register } from './components/users';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddBook, GetAllBooks, GetBookByID, UpdateBook } from './components/Books';
import { Header } from './components/Header';
import { BorrowBook, ShowAllBorrow } from './components/Borrow';
import { Card } from './components/Cards';

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
            <Route path="/book/find" element={<GetBookByID />}></Route>
            <Route path="/book/add" element={<AddBook />}></Route>
            <Route path="/book/update" element={<UpdateBook />}></Route>
            <Route path="/borrow" element={<ShowAllBorrow />}></Route>
            <Route path="/borrow/add" element={<BorrowBook />}></Route>
            <Route path="/card" element={<Card />}></Route>
          </Routes>
      </BrowserRouter>     
    </div>
  );
}
export default App;

import { Login } from './users';
import { Link } from "react-router-dom";
import '../App.css';
export function Header() {
  return (
    <header className="App-header">
      <div className="LoginPosition">
        <Login />
      </div>
      <nav className='navLeft'>
        <Link className='App-link' to={`/book`}>books</Link>
        <span> | </span>
        <Link className='App-link' to={`/book/find`}>find a book</Link>
        <span> | </span>
        <Link className='App-link' to={`/book/add`}>add a book</Link>
        <span> | </span>
        <Link className='App-link' to={`/book/update`}>update book</Link>
        <span> | </span>
        <Link className='App-link' to={`/register`}>register</Link>
        <span> | </span>
        <Link className='App-link' to={`/users`}>users</Link>
        <span> | </span>
        <Link className='App-link' to={`/borrow/add`}>borrow_add</Link>
      </nav>
    </header>
  )
}
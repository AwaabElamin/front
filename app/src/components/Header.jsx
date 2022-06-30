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
        <ul>
          <li><Link className='App-link' to={`/book`}>books</Link></li>
          <li><Link className='App-link' to={`/book/find`}>find a book</Link></li>
          <li><Link className='App-link' to={`/book/add`}>add a book</Link></li>
          <li><Link className='App-link' to={`/book/update`}>update book</Link></li>
        </ul>
      </nav>
      <nav className='navLeft'>
        <ul>
          <li><Link className='App-link' to={`/users`}>users</Link></li>
          <li><Link className='App-link' to={`/register`}>register</Link></li>
        </ul>
      </nav>
      <nav className='navLeft'>
        <ul>
          <li><Link className='App-link' to={`/borrow`}>borrows</Link></li>
          <li><Link className='App-link' to={`/borrow/add`}>borrow_add</Link></li>
        </ul>
      </nav>
      <nav className='navLeft'>
        <ul>
          <li><Link className='App-link' to={`/card`}>My Card</Link></li>
        </ul>

      </nav>
    </header>
  )
}
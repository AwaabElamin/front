import { Login } from './Login';
import { Link } from "react-router-dom";
import '../App.css';
export function Header() {
  return (
    <header className="App-header">
      <div className="LoginPosition">
        <Login />
      </div>
      <nav className='navLeft'>
        <Link className='App-link' to={`/book/add`}>add a book</Link>
      </nav>
    </header>
  )
}
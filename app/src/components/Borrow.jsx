import { useEffect, useState } from "react";
import { borrowBook, GetBorrows } from "../Models/Borrow";
const OneBorrow = ({ result }) => {
    console.log('props: ', result)
    return (<>
        <label>book id:</label>
        <text>{result.book.id}</text><br />
        <label>book title:</label>
        <text>{result.book.name}</text><br />
        <label>book Price:</label>
        <text>{result.book.price}</text><br />
        <label>borrow Date:</label>
        <text>{result.borrowDate}</text><br />
        <label>Actual Return Date:</label>
        <text>{result.actualReturnDate}</text><br />
        <label>Penalty:</label>
        <text>{result.penalty}</text><br />
        <label>user id: </label>
        <text>{result.user.id}</text><br />
        <label>user name: </label>
        <text>{result.user.name}</text><br />
        <label>user email: </label>
        <text>{result.user.email}</text><br />
    </>)
}
export function BorrowBook() {
    const today = () => {
        let newDate = new Date()
        let day = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        return `${month}/${day}/${year}`
    }
    const [book_id, setBook_id] = useState(localStorage.getItem('bookId'));
    const [book_name, setBook_name] = useState(localStorage.getItem('bookTitle'));
    const [book_price, setBook_price] = useState(localStorage.getItem('bookPrice'));
    const [user_id, setUser_id] = useState(localStorage.getItem('id'));
    const [username, setUsername] = useState(localStorage.getItem('username'));
    const [user_email, setUser_email] = useState(localStorage.getItem('email'));
    const [borrowDate, setBorrowDate] = useState(today);
    const [borrowReturn, setBorrowReturn] = useState(today);
    const [actualReturnDate, setActualReturnDate] = useState(today);
    const [penalty, setPenalty] = useState();
    const [errorMessage, setErrorMessage] = useState('');
    
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            window.location.pathname = '/';
        }
    });
    const handleChange = (e) => {
        switch (e.target.name) {
            case 'book_id': setBook_id(e.target.value); break;
            case 'book_name': setBook_price(e.target.value); break;
            case 'book_price': setBook_price(e.target.value); break;
            case 'user_id': setUser_id(e.target.value); break;
            case 'username': setUsername(e.target.value); break;
            case 'user_email': setUser_email(e.target.value); break;
            case 'borrowDate': setBorrowDate(e.target.value); break;
            case 'borrowReturn': setBorrowReturn(e.target.value); break;
            case 'actualReturnDate': setActualReturnDate(e.target.value); break;
            case 'penalty': setPenalty(e.target.value); break;
            default:
        }
    }
    const borrowButtonClicked = async () => {
        const newBorrow = {
            book_id: book_id
            , book_name: book_name
            , book_price: book_price
            , user_id: user_id
            , username: username
            , user_email: user_email
            , borrowDate: borrowDate
            , borrowReturn: borrowReturn
            , actualReturnDate: actualReturnDate
            , penalty: penalty
        }
        const result = await borrowBook(newBorrow);
        if (result.success) {
            setBook_id('');
            setBook_name('');
            setBook_price('');
            setUser_id('');
            setUsername('');
            setUser_email('');
            setBorrowDate('');
            setBorrowReturn('');
            setActualReturnDate('');
            setPenalty('');
            setErrorMessage('borrowed added correctly');
        } else {
            setErrorMessage(result.message)
        }
    }
    return (<>
        <div>
            <br /><input name="book_id" placeholder="book_id" readonly value={book_id} />
            <br /><input name="book_name" placeholder="book_name" value={book_name} />
            <br /><input name="book_price" placeholder="book_price" value={book_price}/>
            <br /><input name="user_id" placeholder="user_id" value={user_id} />
            <br /><input name="username" placeholder="username" value={username}/>
            <br /><input name="user_email" placeholder="user_email" value={user_email} />
            <br /><label>borrow Date</label>
            <input type="date" name="borrowDate" placeholder="borrowDate" value={borrowDate} onChange={handleChange} />
            <br /><label>borrow Retuen Date</label>
            <input type="date" name="borrowReturn" placeholder="borrowReturn"
                value={borrowReturn} onChange={handleChange} />
            <br /><label>Actual Return Date</label>
            <input type="date" name="actualReturnDate" placeholder="actualReturnDate" value={actualReturnDate} on onChange={handleChange} />
            <br /><input type="number" name="penalty" placeholder="penalty" value={penalty} onChange={handleChange} />
            <span>$10 for each day</span>
            <br /><button onClick={borrowButtonClicked}>add</button>
            <br /><span>{errorMessage}</span>
        </div>
    </>)
}
export function ShowAllBorrow() {
    const [result, setResult] = useState([]);
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            window.location.pathname = '/';
        }
    });
    const getAllBorrowsBook = async () => {
        const result = await GetBorrows();
        console.log('result of Borrows:', result);
        setResult(result);
    }
    useEffect(() => {
        getAllBorrowsBook();
    }, []);
    return (<>
        <h1>All Borrowed Books</h1>
        {result.map((book) => <OneBorrow result={book} />)}

    </>)
}
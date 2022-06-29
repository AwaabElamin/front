import { useEffect, useState } from "react";
import { borrowBook } from "../Models/Borrow";

export function BorrowBook() {
    const [book_id, setBook_id] = useState();
    const [book_name, setBook_name] = useState();
    const [book_price, setBook_price] = useState();
    const [user_id, setUser_id] = useState();
    const [username, setUsername] = useState();
    const [user_email, setUser_email] = useState();
    const [borrowDate, setBorrowDate] = useState();
    const [borrowReturn, setBorrowReturn] = useState();
    const [actualReturnDate, setActualReturnDate] = useState();
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
            setErrorMessage('user added correctly');
        } else {
            setErrorMessage(result.message)
        }
    }
    return (<>
        <div>
            <br /><input name="book_id" placeholder="book_id" value={book_id} on onChange={handleChange} />
            <br /><input name="book_name" placeholder="book_name" value={book_name} on onChange={handleChange} />
            <br /><input name="book_price" placeholder="book_price" value={book_price} on onChange={handleChange} />
            <br /><input name="user_id" placeholder="user_id" value={user_id} on onChange={handleChange} />
            <br /><input name="username" placeholder="username" value={username} on onChange={handleChange} />
            <br /><input name="user_email" placeholder="user_email" value={user_email} on onChange={handleChange} />
            <br /><input name="borrowDate" placeholder="borrowDate" value={borrowDate} on onChange={handleChange} />
            <br /><input name="borrowReturn" placeholder="borrowReturn" value={borrowReturn} on onChange={handleChange} />
            <br /><input name="actualReturnDate" placeholder="actualReturnDate" value={actualReturnDate} on onChange={handleChange} />
            <br /><input name="penalty" placeholder="penalty" value={penalty} on onChange={handleChange} />
            <br /><button onClick={borrowButtonClicked}>add</button>
            <br /><span>{errorMessage}</span>
        </div>
    </>)
}
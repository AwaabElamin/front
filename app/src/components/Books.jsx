import { useEffect, useState } from "react"
import { addBook, getAllBook, updateBook } from "../Models/book";
import OneBook from "./book"
export function AddBook() {
    const [title, setTitle] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [author_sbn, setAuthor_sbn] = useState('');
    const [author_name, setAuthor_name] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            window.location.pathname = '/';
        }
    });
    const handleChange = (e) => {
        switch (e.target.name) {
            case 'title': setTitle(e.target.value); break;
            case 'quantity': setQuantity(e.target.value); break;
            case 'price': setPrice(e.target.value); break;
            case 'author_sbn': setAuthor_sbn(e.target.value); break;
            case 'author_name': setAuthor_name(e.target.value); break;
            default:
        }
    }
    const addBookButtonClicked = async () => {
        const newBook = {
            title: title
            , quantity: quantity
            , price: price
            , author_name: author_name
            , sbn: author_sbn
        }
        const result = await addBook(newBook);
        console.log('add book button clicked');
        console.log('title: ', title);
        console.log('quantity: ', quantity);
        console.log('price: ', price);
        console.log('author sbn: ', author_sbn);
        console.log('author_name: ', author_name);
        console.log('result: ', result);
        if (result.success) {
            setAuthor_name("");
            setAuthor_sbn('');
            setPrice(0);
            setQuantity(0);
            setTitle('');
            setErrorMessage('user added correctly');
        } else {
            setErrorMessage(result.message)
        }
    }
    return (<>
        <div>
            <br /><input name="title" placeholder="Title" value={title} on onChange={handleChange} />
            <br /><input type="number" name="quantity" placeholder="quantity" value={quantity} on onChange={handleChange} />
            <br /><input type="number" name="price" placeholder="price" value={price} on onChange={handleChange} />
            <br /><input name="author_sbn" placeholder="author_sbn" value={author_sbn} on onChange={handleChange} />
            <br /><input name="author_name" placeholder="author_name" value={author_name} on onChange={handleChange} />
            <br /><button onClick={addBookButtonClicked}>add</button>
            <br /><span>{errorMessage}</span>
        </div>
    </>)
}
export function UpdateBook() {
    const [title, setTitle] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [author_sbn, setAuthor_sbn] = useState('');
    const [author_name, setAuthor_name] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            window.location.pathname = '/';
        }
    });
    const handleChange = (e) => {
        switch (e.target.name) {
            case 'title': setTitle(e.target.value); break;
            case 'quantity': setQuantity(e.target.value); break;
            case 'price': setPrice(e.target.value); break;
            case 'author_sbn': setAuthor_sbn(e.target.value); break;
            case 'author_name': setAuthor_name(e.target.value); break;
            default:
        }
    }
    const updateBookButtonClicked = async () => {
        const newBook = {
            title: title
            , quantity: quantity
            , price: price
            , author_name: author_name
            , sbn: author_sbn
        }
        const result = await updateBook(newBook);
        if (result.success) {
            if (result.data) {
                setAuthor_name("");
                setAuthor_sbn('');
                setPrice(0);
                setQuantity(0);
                setTitle('');
                setErrorMessage('book updated correctly');
            } else {
                setErrorMessage('book not found');
            }
        } else {
            setErrorMessage(result.message)
        }
    }
    return (<>
        <br /><input name="title" placeholder="Title" value={title} on onChange={handleChange} />
        <br /><input type="number" name="quantity" placeholder="quantity" value={quantity} on onChange={handleChange} />
        <br /><input type="number" name="price" placeholder="price" value={price} on onChange={handleChange} />
        <br /><input name="author_sbn" placeholder="author_sbn" value={author_sbn} on onChange={handleChange} />
        <br /><input name="author_name" placeholder="author_name" value={author_name} on onChange={handleChange} />
        <br /><button onClick={updateBookButtonClicked}>add</button>
        <br /><span>{errorMessage}</span>
    </>)
}
export function GetAllBooks() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            window.location.pathname = '/';
        }
    });
    const fectchBooks = async () => {
        const result = await getAllBook();
        console.log('result:- ', result);
        setBooks(result);
    }
    useEffect(() => {
        fectchBooks();
        console.log('books:- ', books);
    }, []);

    return (<>
        <h1>All Books</h1>
        <div>
            {
                books.map(u => <OneBook book={u} key={u._id} />)
            }
        </div>
    </>)
}
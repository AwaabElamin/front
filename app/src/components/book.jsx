import { useEffect, useState } from "react";
import { deleteBookById } from "../Models/book";
import { Redirect } from "react-router-dom";

export default function OneBook({ book }) {
    console.log('book: ', book);
    const [showDelete, setShowDelete] = useState(false);
    const [goToBorrow, setGoTOBorrow] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('role') === 'admin')
            setShowDelete(true);
        else
            setShowDelete(false);

        setGoTOBorrow(false);
    }, [])

    const deleteBook = async () => {
        console.log('delete: ', book._id);
        const result = await deleteBookById(book._id);
        if (result.success) {
            window.location.pathname = '/book';
        }
        console.log('result:', result);
    }
    const borrowBook = () => {
        console.log('Book: ', book);
        localStorage.setItem('bookTitle', book.title)
        localStorage.setItem('bookId', book._id)
        localStorage.setItem('bookPrice', book.price)
        setGoTOBorrow(true);
    }

    return (<>
        {
            goToBorrow ?
                window.location.pathname = '/borrow/add'
                :
                <div className="books">
                    <h3>{book.title}</h3>
                    {showDelete ? <button onClick={deleteBook}>delete</button> : null}
                    <button onClick={borrowBook}>Borrow</button>
                    <p>
                        <label>ID: </label>
                        <text>{book._id}</text><br />
                        <label>Author name: </label>
                        <text>{book.author.author_name}</text><br />
                        <label>SBN: </label>
                        <text>{book.author.sbn}</text><br />
                        <label>price: </label><text>{book.price}</text><br />
                        <label>quantity: </label><text>{book.quantity}</text>
                    </p>
                </div>
        }

    </>)
}
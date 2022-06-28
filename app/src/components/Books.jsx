import { useEffect, useState } from "react"
import { addBook } from "../Models/book";

export function AddBook({route}) {
    const [title, setTitle] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [author_sbn, setAuthor_sbn] = useState('');
    const [author_name, setAuthor_name] = useState('');
    const [errorMessage,setErrorMessage] = useState('');
    useEffect(()=>{
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
    const addBookButtonClicked = async() => {
        const newBook = {
            title:title
            ,quantity:quantity
            ,price:price
            ,author_name:author_name
            ,sbn: author_sbn
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
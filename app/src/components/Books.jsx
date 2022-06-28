import { useState } from "react"

export function AddBook() {
    const [title, setTitle] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [author_sbn, setAuthor_sbn] = useState('');
    const [author_name, setAuthor_name] = useState('');

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
    const addBookButtonClicked = () => {
        console.log('add book button clicked');
        console.log('title: ', title);
        console.log('quantity: ', quantity);
        console.log('price: ', price);
        console.log('author sbn: ', author_sbn);
        console.log('author_name: ', author_name);
    }
    return (<>
        <div>
            <br /><input name="title" placeholder="Title" value={title} on onChange={handleChange} />
            <br /><input name="quantity" placeholder="quantity" value={quantity} on onChange={handleChange} />
            <br /><input name="price" placeholder="price" value={price} on onChange={handleChange} />
            <br /><input name="author_sbn" placeholder="author_sbn" value={author_sbn} on onChange={handleChange} />
            <br /><input name="author_name" placeholder="author_name" value={author_name} on onChange={handleChange} />
            <br /><button onClick={addBookButtonClicked}>add</button>
        </div>
    </>)
}
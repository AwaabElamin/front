export default function OneBook({ book }) {
    console.log('book: ', book);
    return (<>
        <p>
            <h3>{book.title}</h3>
            <label>Author name: </label>
            <text>{book.author.author_name}</text><br />
            <label>SBN: </label>
            <text>{book.author.sbn}</text><br />
            <label>price: </label><text>{book.price}</text><br />
            <label>quantity: </label><text>{book.quantity}</text>
        </p>
    </>)
}
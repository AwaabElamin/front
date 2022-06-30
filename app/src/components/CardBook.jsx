export default function CardBook({ book }) {
    console.log('result in Card Book: ', book);
    return (<>
        <p>
            <label>book ID: </label>
            <text>{book._id}</text><br />
            <label>book title: </label>
            <text>{book.bookTitle}</text><br />
            <label>book Price: </label>
            <text>{book.bookPrice}</text><br />
        </p>
    </>)
}
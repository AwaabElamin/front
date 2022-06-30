import '../App.css'
export default function OneUser(props) {
    console.log(props.user);
    const cards = props.user.card.map((item)=>(
        <div className="books">
            <span>Id: {item._id}</span><br/>
            <span>Title: {item.bookTitle}</span><br/>
            <span>Price: {item.bookPrice}</span><br/>
            bookPrice
        </div>
    ));
    return (<li className='navLeft'><span>{props.user.email}</span>
        <div className="books">
            <span>userID:- {props.user._id}</span>
            <br/><span>usersname:- {props.user.username}</span>
            <br/><span>phone:- {props.user.phone}</span>
            <br/><span>phone:- {props.user.phone}</span>
            <br/><span>Card:- </span><br/>{cards}
        </div>
        <br/>
    </li>)
}
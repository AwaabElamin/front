export default function OneUser(props) {
    console.log(props.user);
    const cards = props.user.card.map((item)=>(
        <div>
            <span>Id: {item._id}</span><br/>
            <span>Title: {item.bookTitle}</span><br/>
            <span>Price: {item.bookPrice}</span><br/>
            bookPrice
        </div>
    ));
    return (<li><span>{props.user.email}</span>
        <ui>
            <li><span>userID:- {props.user._id}</span></li>
            <li><span>usersname:- {props.user.username}</span></li>
            <li><span>phone:- {props.user.phone}</span></li>
            <li><span>phone:- {props.user.phone}</span></li>
            <li><span>Card:- </span><br/>{cards}</li>
        </ui>
        <br/>
    </li>)
}
import { useEffect, useState } from "react";
import { getCard } from "../Models/cardModel";
import CardBook from "./CardBook";


export function Card() {
    const [data, setData] = useState([]);
    const retrieveCardData = async () => {
        const result = await getCard();
        console.log('result:- ', result.data);
        setData(result.data);
    }
    useEffect(() => {
        retrieveCardData();
        console.log('data ', data);
    }, []);
    return (<>
        {data.map(book =><CardBook book={book} key={book._id}/>)}

    </>)
}
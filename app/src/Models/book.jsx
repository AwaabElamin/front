import axios from 'axios';
const URL = "http://localhost:3001/books";
const header = {
    headers:{
        authorization: 'Brear '+localStorage.getItem('token') 
    }
}
export async function addBook (newBook){
    console.log('token from add book: ', localStorage.getItem('token'));
    console.log('header: ', header)
    let result = 
    await axios.post(URL,newBook,header)
        .then(res => {
           return res.data;
        })
        .catch(err => 'error:-\n' + err);
    return result;
}
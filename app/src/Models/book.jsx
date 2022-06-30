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
export async function updateBook (newBook){
    // console.log('token from update book: ', localStorage.getItem('token'));
    // console.log('header: ', header)
    let result = 
    await axios.put(URL,newBook,header)
        .then(res => {
           return res.data;
        })
        .catch(err => 'error:-\n' + err);
    return result;
}
export async function getAllBook (){
    let result = 
    await axios.get(URL,header)
        .then(res => {
           return res.data;
        })
        .catch(err => 'error:-\n' + err);
    return result;
}
export async function getBookByID (id){
    let result = 
    await axios.get(URL + '/' + id,header)
        .then(res => {
           return res.data;
        })
        .catch(err => 'error:-\n' + err);
    return result;
}
export async function deleteBookById (id){
    console.log('delete book by id=', id);
    let result = 
    await axios.delete(URL +'?id='+ id,header)
        .then(res => {
           return res.data;
        })
        .catch(err => 'error:-\n' + err);
    return result;
}
export async function updateBookById (book){
    console.log('delete book by id=', book);
    let result = 
    await axios.put(URL,book,header)
        .then(res => {
           return res.data;
        })
        .catch(err => 'error:-\n' + err);
    return result;
}
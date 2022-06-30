import axios from 'axios';
const URL ="http://localhost:3001/card";
const header = {
    headers:{
        authorization: 'Brear '+localStorage.getItem('token') 
    }
}
export async function getCard(){
    const email ={
        user_email:localStorage.getItem('email')
    } 
    let reqInstance = axios.create(header,{body:email});
    console.log('email:- ', email);
    console.log('header: ', header);
    let result = 
    await axios.post( URL+'/all',email,header)
        .then(res => {
           return res.data;
        })
        .catch(err => 'error:-\n' + err);
    return result;
}
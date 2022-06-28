// import react from "react";
import axios from 'axios';
const URL = "http://localhost:3001";
export async function LoginAuth(username, password) {
    let result = 
    await axios.post(URL + '/login', { username: username, password: password })
        .then(res => {
           return res.data;
        })
        .catch(err => 'error:-\n' + err);
    return result;
}
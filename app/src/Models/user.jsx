// import react from "react";
import axios from 'axios';
const URL = "http://localhost:3001";
const URL_USERS = "http://localhost:3001/users";
const header = {
    headers:{
        authorization: 'Brear '+localStorage.getItem('token') 
    }
}
export async function LoginAuth(username, password) {
    let result = 
    await axios.post(URL + '/login', { username: username, password: password })
        .then(res => {
           return res.data;
        })
        .catch(err => 'error:-\n' + err);
    return result;
}
export async function CreateUser(newUser) {
    let result = 
    await axios.post(URL_USERS, newUser,header)
        .then(res => {
           return res.data;
        })
        .catch(err => 'error:-\n' + err);
    return result;
}
export async function getAllUsers() {
    let result = 
    await axios.get(URL_USERS,header)
        .then(res => {
           return res.data;
        })
        .catch(err => 'error:-\n' + err);
    return result;
}
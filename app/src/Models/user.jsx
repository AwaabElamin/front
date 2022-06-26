import react from "react";
import axios from 'axios';
const URL = "localhost:3001";
export async function LoginAuth (username, password){
    const data = await axios.post(URL+ '/login',{username:'admin', password:'admin'});
    console.log(data);
}
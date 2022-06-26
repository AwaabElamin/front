import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import { LoginAuth } from "../Models/user";
import axios from 'axios';


export function Login() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [tokenStatus, setTokenStatus] = useState(false);
    useEffect(() => {
        console.log('use Effect');
        if (localStorage.getItem('token')) {
            return () => setTokenStatus(true);
        }
        else return () => setTokenStatus(false);
    }, [tokenStatus])

    const handleLogout = () => {
        localStorage.removeItem('token');
        setTokenStatus(false);
    }
    const handleSubmit = async () => {
        localStorage.setItem('token', 'aaaa');
        setTokenStatus(true);
        console.log('token= ', localStorage.getItem('token'));
        const data = await axios.post('localhost:3001/login', { username: 'admin', password: 'admin' })
        .then(res => console.log(res));
        
    }
    return (
        !tokenStatus ?
            <div>
                <input
                    placeholder="user name"
                    value={username} onChange={e => setUserName(e.target.value)}
                    style={{ marginRight: '0.05%' }}
                />
                <input
                    placeholder="password"
                    type={"password"}
                    value={password} onChange={e => setPassword(e.target.value)}
                />
                <button onClick={handleSubmit}>login</button>
            </div> :
            <>
                <button onClick={handleLogout}>logout</button>
                <br />
                <Link to={`/register`}>register</Link>
            </>

    )
}
export function Register() {
    const [state, setState] = useState({
        username: ''
        , password: ''
        , address: ''
        , phone: ''
        , elemnt: ''
        , eleement1: ''
        , last: ''
    })
    const regiterUser = () => {
        console.log(state)
    }
    return (<>
        <h1>Register</h1>
        <div>
            <input placeholder="user name" value={state.username} onChange={e => setState({ ...state.username = e.target.value })} />
            <br /><input placeholder="password" value={state.password} onChange={e => setState({ ...state.password = e.target.value })} />
            <br /><input placeholder="address" value={state.address} onChange={e => setState({ ...state.address = e.target.value })} />
            <br /><input placeholder="phone" value={state.phone} onChange={e => setState({ ...state.phone = e.target.value })} />
            <br /><input placeholder="elemnt" value={state.elemnt} onChange={e => setState({ ...state.elemnt = e.target.value })} />
            <br /><input placeholder="eleement1" value={state.eleement1} onChange={e => setState({ ...state.eleement1 = e.target.value })} />
            <br /><input placeholder="last" value={state.last} onChange={e => setState({ ...state.last = e.target.value })} />
            <br /><button onClick={regiterUser}>register</button>
        </div>
    </>)
}
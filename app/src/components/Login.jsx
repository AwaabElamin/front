import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import { LoginAuth } from "../Models/user";


export function Login() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [tokenStatus, setTokenStatus] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {
        console.log('use Effect');
        if (localStorage.getItem('token')) {
            return () => setTokenStatus(true);
        }
        else return () => setTokenStatus(false);
    }, [tokenStatus])
    const handleChanged = (e) => {
        if (e.target.name === 'username') {
            setUserName(e.target.value);
        }else{
            setPassword(e.target.value);
        }
    }
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        setTokenStatus(false);
    }
    const handleSubmit = async () => {
        const result = await LoginAuth(username, password);
        if (typeof result === String) {
            if (result.includes('error')) {
                console.log('awaab');
            } else {
                console.log(result);
            }
        } else {
            console.log('result = ', result);
            if (result.success) {
                setTokenStatus(true);
                localStorage.setItem('token', result.token);
                localStorage.setItem('role', result.role);
                console.log('token= ', localStorage.getItem('token'));
                console.log('role= ', localStorage.getItem('role'));
                setErrorMessage('');
            } else {
                setErrorMessage(result.message)
            }

        }

    }
    return (
        !tokenStatus ?
            <>
                <input
                    placeholder="user name" size={10}
                    value={username} name='username' onChange={handleChanged}
                    style={{ marginRight: '0.05%' }}
                />
                <input name='password' size={10}
                    placeholder="password"
                    type={"password"}
                    value={password} onChange={handleChanged}
                />
                <button onClick={handleSubmit}>login</button>
                <span>{errorMessage}</span>
            </> :
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
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import { LoginAuth } from "../Models/user";

// const header = {
//     headers:{
//         authorization: 'Brear '+localStorage.getItem('token') 
//     }
// }


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
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [errorMessage,setErrorMessage] = useState('')
const handleChanged =() =>{}

    const regiterUser = () => {
        // const newUser = {
        //     username:username
        //     ,password:password
        //     ,role:'user'
        //     ,email:email
        //     ,phone: phone
        //     ,address:address
        // }
        const result =''; // await addBook(newBook);
        if (result.success) {
            setUsername('')
            ;setPassword('')
            ;setEmail('')
            ;setPhone('')
            ;setAddress('')
        } else {
            setErrorMessage(result.message)
        }
    }
    return (<>
        <h1>Register</h1>
        <div>
            <input placeholder="user name" value={username} onChange={handleChanged} />
            <br /><input placeholder="password" value={password} onChange={handleChanged} />
            <br /><input placeholder="email" value={email} onChange={handleChanged} />
            <br /><input placeholder="phone" value={phone} onChange={handleChanged} />
            <br /><input placeholder="address" value={address} onChange={handleChanged} />
            <br /><button onClick={regiterUser}>register</button>
            <br /><span>{errorMessage}</span>
        </div>
    </>)
}
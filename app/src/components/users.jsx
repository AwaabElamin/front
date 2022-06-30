import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import { CreateUser, getAllUsers, LoginAuth } from "../Models/user";
import OneUser from "./user";

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
        } else {
            setPassword(e.target.value);
        }
    }
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        setTokenStatus(false);
        window.location.pathname = '/';
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
            </>

    )
}
export function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const handleChanged = (e) => {
        const value = e.target.value;
        switch (e.target.name) {
            case 'username': setUsername(value); break;
            case 'password': setPassword(value); break;
            case 'email': setEmail(value); break;
            case 'phone': setPhone(value); break;
            case 'address': setAddress(value); break;
            default: break;
        }
    }

    const registerUser = async () => {
        const newUser = {
            username:username
            ,password:password
            ,role:'user'
            ,email:email
            ,phone: phone
            ,address:address
        }
        const result = await CreateUser(newUser);
        if (result.success) {
            setUsername('')
                ; setPassword('')
                ; setEmail('')
                ; setPhone('')
                ; setAddress('')
        } else {
            setErrorMessage(result.message)
        }
    }
    return (<>
        <h1>Register</h1>
        <div>
            <br /><input name="username" placeholder="user name" value={username} onChange={handleChanged} />
            <br /><input name="password" placeholder="password" value={password} onChange={handleChanged} />
            <br /><input name="email" placeholder="email" value={email} onChange={handleChanged} />
            <br /><input name="phone" placeholder="phone" value={phone} onChange={handleChanged} />
            <br /><input name="address" placeholder="address" value={address} onChange={handleChanged} />
            <br /><button onClick={registerUser}>register</button>
            <br /><span>{errorMessage}</span>
        </div>
    </>)
}
export  function GetAllUsers() {
    const [users,setUsers]= useState([]);
    useEffect(()=>{
        if (!localStorage.getItem('token')) {
          window.location.pathname = '/';
        }
    });
    const fetchUsers = async() =>{
        const result = await getAllUsers();
        // result.map((user,i)=>users.push(user));
        setUsers(result);
    }
    useEffect(()=>{
       fetchUsers();
    },[]);  
       
    return (<>
        <h1>Get All Users</h1>
        <ui>
            {users.map((u)=> <OneUser user={u} key={u._id}/>)}
        </ui>
    </>)
}
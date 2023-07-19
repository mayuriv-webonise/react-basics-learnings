import '../styles/App.css';
import React, { useContext } from 'react';
import {useNavigate} from "react-router-dom";
import { AuthContext } from '../context/GlobalUserContext';


export default function Login() {
    const username = React.useRef("");
    const password = React.useRef("");
    const role = React.useRef("");

    const {  dispatch } = useContext(AuthContext);
    
    const navigate = useNavigate();


const handleClick = () =>{
    dispatch({ type: 'LOGIN', payload: {username:username.current.value, role:role.current.value} });
    sessionStorage.setItem('loginuser',JSON.stringify({username:username.current.value, role:role.current.value}));
    navigate("/home")
    
}
    
    return (
        <div className="App">
            <div style={{ width: '100%', border: '1px solid #282c34' }}>
                <h1>Welcome to React App..</h1> {/* way to display state variable  */}
            </div>
            <>
                <div className="container">
                    <label htmlFor="uname">
                        <b>Username</b>
                    </label><br/>
                    <input ref={username} type="text" placeholder="Enter Username" name="uname" required="" /><br/>
                    <label htmlFor="psw">
                        <b>Password</b>
                    </label><br/>
                    <input
                    ref={password} 
                        type="password"
                        placeholder="Enter Password"
                        name="psw"
                        required=""
                    /><br/>
                    <label htmlFor="role">
                        <b>Role</b>
                    </label><br/>
                    <input
                    ref={role} 
                        type="text"
                        placeholder="Enter Role"
                        name="role"
                        required=""
                    /><br/>
                    <button onClick={handleClick}>Login</button>
                    
                </div>
               
            </>
        </div>
    );
}
import '../styles/App.css';
import React, { useContext } from 'react';
import {useNavigate} from "react-router-dom";
import { AuthContext } from '../context/GlobalUserContext';

const css ={
    "input[type=text], input[type=password] :": {
        width: "30%",
        padding: "12px 20px",
        margin: "8px 0",
        display: "inline-block",
        border: "1px solid #ccc",
        boxSizing: "border-box"
      },
      button: {
        backgroundColor: "#1976d2",
        color: "white",
        padding: "14px 20px",
        margin: "8px 0",
        border: "none",
        cursor: "pointer",
        marginRight: '7px',
        marginLeft: '10px'
      }
};
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
const handleSignUpClick = () =>{
    navigate("/register")
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
                    <input ref={username} type="text" placeholder="Enter Username" name="uname" required="" style={css['input[type=text], input[type=password] :']}/><br/>
                    <label htmlFor="psw">
                        <b>Password</b>
                    </label><br/>
                    <input
                    ref={password} 
                        type="password"
                        placeholder="Enter Password"
                        name="psw"
                        required=""
                        style={css['input[type=text], input[type=password] :']}
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
                        style={css['input[type=text], input[type=password] :']}
                    /><br/>
                    <div >
                        <button style={css.button} onClick={handleClick}>Login</button>
                        <button style={css.button} onClick={handleSignUpClick}>Sign Up</button>
                    </div>
                    
                </div>
               
            </>
        </div>
    );
}
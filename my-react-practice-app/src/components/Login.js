import '../styles/App.css';
import React, { useContext } from 'react';
import {useNavigate} from "react-router-dom";



export default function Login() {
    const username = React.useRef("");
    const password = React.useRef("");
    const role = React.useRef("");

    
    const navigate = useNavigate();

    React.useEffect(() => {
        username.current.value ='test';
        role.current.value ='developer';
      }, []);


const handleClick = () =>{
    navigate("/user")
    
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
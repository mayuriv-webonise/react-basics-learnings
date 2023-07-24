import React from 'react';
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
        marginLeft: '10px',
        width: '10% !important'
      }
};

export default function Header(props) {

    const { state, dispatch } = React.useContext(AuthContext);
    const [userDeatail, setUserDetail] = React.useState(state);


      React.useEffect(() => {
        console.log(userDeatail, state);
        
      }, [userDeatail]); 

    const handleLogoutClick = () =>{
        dispatch({ type: 'LOGOUT'});
        sessionStorage.removeItem('loginuser');
        navigate("/",{ replace: false })
        
    }
    const navigate = useNavigate();


    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '34%' }}>
           <div  style={{ margun: '15px'}}>User:  {state.username}<br/>
           Role:  {state.role}</div>
            <button style={css.button} onClick={() => navigate(props.url)}>Next topic</button>
            <i className="gg-log-out" style={{ marginLeft: '1%', width: '10% !important' }} onClick={handleLogoutClick}></i>

        </div>

    );
}
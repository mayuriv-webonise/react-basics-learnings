import React from 'react';
import {useNavigate} from "react-router-dom";
import { AuthContext } from '../context/GlobalUserContext';


export default function Header(props) {

    const { state, dispatch } = React.useContext(AuthContext);

    const handleLogoutClick = () =>{
        dispatch({ type: 'LOGOUT'});
        navigate("/login")
        
    }
    const navigate = useNavigate();
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '38%' }}>
            <button style={{  width: '10% !important' }} onClick={() => navigate(props.url)}>Next topic</button>
            <i class="gg-log-out" style={{ marginLeft: '1%', width: '10% !important' }} onClick={handleLogoutClick}></i>

        </div>

    );
}

import '../styles/App.css';
import React from 'react';
import Dashboard from './Dashboard';
import User from './User';
import Header from './Header';
import { UserContext } from '../context/GlobalUserContext';


function Home() {
    //used state hook
    const [childMessage, setChildMessage] = React.useState('');
    let message = "Have a good day!";

 

  // const {userName, role} = React.useContext(UserContext);

  //function expression for callback function(catch the data from child)
    const showName = (data) => {
        setChildMessage(data); //set value to state variable
    }

    //return statemnet will return the jsx which will render on ui
    return (
        <div className="App">

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h1 style={{ marginLeft: '42%' }}>Welcome to my app {childMessage}...</h1>
                <Header url="/user"></Header>
                
            </div>

            {/* render child component  */}
            <Dashboard message={message} passName={showName}></Dashboard> {/* pass props to child this way */}




        </div>
    );
}

export default Home;

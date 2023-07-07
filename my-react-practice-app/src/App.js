import logo from './logo.svg';
import './App.css';
import React from 'react';
import Dashboard from './Dashboard';
import User from './User';


function App() {
  //used state hook
  const [childMessage, setChildMessage] = React.useState('');
  let message = "Have a good day!";

  //function expression for callback function(catch the data from child)
  const showName = (data) => {
    setChildMessage(data); //set value to state variable
  }

  //return statemnet will return the jsx which will render on ui
  return (
    <div className="App">
      <div style={{ width: '100%', border: '1px solid #282c34' }}>
        <h1>Welcome to my app {childMessage}...</h1> {/* way to display state variable  */}

      </div>

      {/* render child component  */}
      <div style={{ display: 'flex' }}> {/* unline styling syntax  */}
        <div style={{ width: '35%' }}>
          <Dashboard message={message} passName={showName}></Dashboard> {/* pass props to child this way */}
        </div>
        <div style={{ width: '65%' }}>
          <User></User>
        </div>
      </div>

    </div>
  );
}

export default App;

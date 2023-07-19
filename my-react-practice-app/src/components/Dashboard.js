import React from 'react';
  import {useNavigate} from "react-router-dom"
  import propTypes from 'prop-types';

const Dashboard = ({message, passName}) =>{
  const [displayMessage, setDispalyMessage] = React.useState('');
  const [count, setCount] = React.useState(0);

  //usenavigate hook used to get navigate page
  const navigate = useNavigate();


  //useRef hook used to get input value
  const nameRef = React.useRef();


  
//showing message from parent
  const handleButtonClick = () => {
   console.log(typeof(message));
    setDispalyMessage(message);
  }

  // const sendName = () => {
  //   props.passName(nameRef.current.value); //passing child value to callback function of parent. 
  // }


  //UseEffect hook called whenever dependant state gets changed
  React.useEffect(() => {
    if(count ===5){
      passName(nameRef.current.value); 
      setCount(0);
    }
  }, [count]); // Only re-run the effect if count changes


  return (
    <div className="App">
      
      <div style={{display: 'flex', alignItems: 'center'}}>
  <h3 style={{marginLeft: '42%'}}>Welcome to dashboard component</h3>

</div>
        
        <button onClick={handleButtonClick}>Show message from parent app</button>
        <h6>{displayMessage}</h6>
        <p>======================================================</p>
        <div>
          <input placeholder='Your name....' ref={nameRef}></input>
        {/* <button onClick={sendName}>send name</button> */}
        </div>
        <div>
           {/* <p>You clicked {count} times</p> */}
           <p>Click 5 times to send name from child to parent : {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
        </div>
      
    </div>
  );
}

Dashboard.propTypes = {
  message: propTypes.string.isRequired,
  passName: propTypes.func.isRequired
};

export default Dashboard;
import React from 'react';

function Dashboard(props) {
  const [displayMessage, setDispalyMessage] = React.useState('');
  const [count, setCount] = React.useState(0);


  //useRef hook used to get input value
  const nameRef = React.useRef();
//showing message from parent
  const handleButtonClick = () => {
    console.log(props.message);
    setDispalyMessage(props.message);
  }

  // const sendName = () => {
  //   props.passName(nameRef.current.value); //passing child value to callback function of parent. 
  // }


  //UseEffect hook called whenever dependant state gets changed
  React.useEffect(() => {
    if(count ===5){
      props.passName(nameRef.current.value); 
    }
  }, [count]); // Only re-run the effect if count changes


  return (
    <div className="App">
      <div>
        <h3>Welcome to dashboard component</h3>
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
    </div>
  );
}

export default Dashboard;
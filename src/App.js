import React, { useState } from 'react';
import './style.css';

//using an if condtion
function Greet({ greeting }) {
  if (greeting) {
    return <h1>Welcome User</h1>;
  }
  return <p>Please login</p>;
}

//using a ternary operator
function Light({ switchOn }) {
  return switchOn ? 'ON' : 'OFF';
}

// maintaining state using a ternary operator
function Bulb() {
  const [state, setState] = useState(false);

  const toggleButton = () => {
    setState(state ? false : true);
  };

  return (
    <p className={`light ${state ? 'on' : ''}`} onClick={toggleButton}>
      Bulb {state ? 'ON' : 'OFF'}{' '}
    </p>
  );
}

//rendering , using an && operator
function LogMessage({ isLogged }) {
  return (
    <div className="box">
      <h2>LogMessage app</h2>
      {isLogged && <p>Welcome to APP</p>}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Greet greeting />
      <Light switchOn={false} />
      <Bulb />
      <LogMessage />
      <LogMessage isLogged />
    </div>
  );
}

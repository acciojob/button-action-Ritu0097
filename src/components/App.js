import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  const [visible,setvisible]=useState(false);
  const setVisible =()=>{
    setVisible(!visible);
  }
  return (
    <div className="App" id="main">
      <p id="para" className={visible ? 'show' : 'hide'}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      <button id="click" onClick={setvisible}>click me</button>
    </div>
  );
}

export default App

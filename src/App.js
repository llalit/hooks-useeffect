import React, { useContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [num, setNum]= useState(0);
  const [num1, setNum1] = useState(0);

  useEffect(()=>{
    document.title=`you clicked ${num}`;
  },[num])

  return (
    <>
   
      <button className="btn btn-danger" onClick={()=>{
        setNum(num+1);
      }}>hello {num}</button>

      <button className="btn btn-primary" onClick={()=>{
        setNum1(num1+1);
      }}>hello {num1}</button>

    </>
  );
}

export default App;

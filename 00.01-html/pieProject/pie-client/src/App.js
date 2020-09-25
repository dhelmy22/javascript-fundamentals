import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Pies from './components/Pies/Pies';

function App() {

const [sessionToken,  setSessionToken] = useState(undefined);
// console.log(sessionToken);

const viewConductor=()=>{
  return sessionToken!==undefined?
  <Pies token={sessionToken}/>:
  <Auth updateToken={updateToken}/>
}
const updateToken = newToken =>{
  localStorage.setItem('token:', newToken);
  setSessionToken(newToken)
}

const clearToken = () =>{
  localStorage.clear();
  setSessionToken(undefined);
}

  return (
    <div className="App">
      
      <Navbar clearToken={clearToken} />
      {viewConductor()}
      {/* <Auth />
      <Pies /> */}
    </div>
  );
}

export default App;


// let [one, two, three] = ['fellowship of the ring', 'two towers', 'return of the king'];
// console.log(one, two, three)

// let [a, ,c]= ['mercury', 'venus', 'earth'];
// console.log(a,c)

// let planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto']
// console.log(planets);
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; //Added
// import logo from './logo.svg';
import './App.css';
//  Added Code
import Header from './components/site/Header';
import Footer from './components/site/Footer';
import Sidebar from './components/site/Sidebar';
import FunctionalComponentDemo from './components/concepts/FunctionalComponentDemo';
import { BrowserRouter as Router } from 'react-router-dom'; // What is this?


const App = () => {
  return (
    <div>

     <Header />
    <Router>
      <Sidebar />
    </Router>
    <Footer />
   
    </div>
  ); 
};

export default App;

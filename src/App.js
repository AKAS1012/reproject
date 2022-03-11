import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from './Components/layout/header.js'
import WebFont from 'webfontloader';
import React, {useEffect} from 'react';
import Footer from './Components/footer/footer';
import Home from './Components/Home/home'

function App() {
  React.useEffect(()=>{
    WebFont.load({
      google:{
        families:["robot", "chilanka"]
      }
    })
  },[])
  return (
    <Router>
      <Header />
      <React exact path='/' element={<Home/>}/>
      <Footer/>
    </Router>
  );
}

export default App;

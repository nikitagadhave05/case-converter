import './App.css';
// import Enablemode from './components/Enablemode';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor='#37393b';

      // to change the title
      document.title="Case Converter-Dark Mode";    
      
      // To spark the title

      // setInterval(() => {
      //   document.title="Best Case Converter";
      // }, 1500);
      // setInterval(() => {
      //   document.title="Must Use It!";
      // }, 2000);
    }
    else {
      setmode('light');
      document.body.style.backgroundColor='#ebeaea';
      // to change the title
      document.title="Case Converter-Light Mode";        
    }
  }
  // const blueMode=()=>{
  //     document.body.style.backgroundColor='#8cabbe';
  // }
  // const grayMode=()=>{
  //     document.body.style.backgroundColor='#486f80';
  // }
  // const yellowMode=()=>{
  //     document.body.style.backgroundColor='#fffa87';
  // }
  // const greenMode=()=>{
  //     document.body.style.backgroundColor='rgb(187, 160, 178)';
  // }
  return (
    <>
    <Router>
      <Navbar title="Case Converter" about="About Us" mode={mode} toggleMode={toggleMode} />
      {/* for changing mode
      blueMode={blueMode} grayMode={grayMode} yellowMode={yellowMode} greenMode={greenMode} */}
      
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
        <TextForm title="Input Text Below:" mode={mode} />
          </Route>
        </Switch>
      </div>
      {/* <Enablemode /> */}
    </Router>
    </>
  );
}

export default App;

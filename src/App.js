import './App.css';
import About from './components/About';
import Alert from './components/Alert';

import Navbar2 from './components/Navbar2';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#333';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - Dark';
    }else{
      setMode('light');
      document.body.style.backgroundColor='#fff';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - Light';
    }
  }
  return (
    <>
    <Router>
    <Navbar2 title = "TextUtils" mode={mode} toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading = "Enter the text to analyse" mode={mode}/>
          </Route>
    </Switch>
      
       
    </div>
    </Router>
    </>
  );
}

export default App;

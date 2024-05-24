import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import { useState } from 'react'
import Alert from './components/Alert'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

 function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type) =>{
    setAlert({
      msg:message,
      type:type                 
    });
    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  }
  const togglemode =()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled" , "success")
    }
    else{
      setMode('light') 
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled" , "success")
    }   
  } 

  const toggleMode1 =()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled" , "success")
    }
    else{
      setMode('light') 
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled" , "success")
    }    
  } 
  
  const toggleMode2 =()=>{
    document.body.style.backgroundColor = '#106845'
      showAlert("Green coloured dark mode has been enabled" , "success")
  }

  const toggleMode3 =()=>{
    document.body.style.backgroundColor = '#940707'
    showAlert("Red coloured dark mode has been enabled" , "success")
  }

  const toggleMode4 =()=>{
    document.body.style.backgroundColor = '#512e72'
    showAlert("Violet coloured dark mode has been enabled" , "success")
  }

  return (
   <>
      <Router>
      <Navbar title="Textutiles" aboutText="About" mode={mode} toggleMode1={toggleMode1} toggleMode2={toggleMode2} toggleMode3={toggleMode3} toggleMode4={toggleMode4} />
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
          <Route exact path="/about" element={<About mode={mode} togglemode={togglemode}/>} / >    
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading ="Enter your text" mode={mode}/> }/>  
      </Routes>
     </div>
     </Router>
     </>
  )
}

export default App 

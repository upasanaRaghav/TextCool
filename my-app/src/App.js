import React ,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';

function App() {
  const[mode, setMode]=useState('light');

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#191935'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'    
    }
  }

  return (
    <>
    <Navbar title="TextCool" AboutText="About" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <TextArea heading="Enter Your Text Below:" mode={mode}/></div>
    </>
     

  );
}

export default App;

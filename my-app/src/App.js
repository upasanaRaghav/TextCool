import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';

function App() {
  return (
    <>
    <Navbar title="TextCool" AboutText="About"/>
    <div className="container my-3"><TextArea heading="Enter Your Text Below:"/></div>
    </>
     

  );
}

export default App;

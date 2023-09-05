import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import axios from "axios";

function App() {
  const [hello, setHello] = useState("")

  useEffect(() => {
    axios.get('/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
  }, []);

  return (
    <div className='hello'>

    </div>
  );
}

export default App;

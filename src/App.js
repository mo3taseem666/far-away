import "./App.css";
import {useState} from 'react'
import Top from "./components/Top";
import Mid from "./components/Mid";
import Cont from "./components/Cont";


function App() {
  const [a,setA] = useState([])
  return (
    <div className="App font-font1">
      <Cont a={a} b={setA} />
    </div>
  );
}


export default App;

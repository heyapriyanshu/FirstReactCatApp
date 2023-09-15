
import {useEffect, useState} from "react"
import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css"


function App() {
  const [facts,setFacts] = useState("")
const [count,setCount] = useState(0)


async function getFacts(){
  const res = await fetch("https://catfact.ninja/fact")
  const data = await res.json()
  setCount(c => c+1)
  setFacts(data.fact)
}
useEffect(function (){
  getFacts();
},[]);
  return (
    <div className="container">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
       
        
     
     <h1 className="fact">Fact: {facts}</h1>
     <div className="order">

     
     <p >Total facts read : {count-1} </p>
     <button class = "btn" onClick = {getFacts}> Get Another Fact </button>
     
   
     </div>
      </header>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root")).render(<React.StrictMode> <App /> </React.StrictMode>)

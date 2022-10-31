// How useState is used to pass certain data

/*import "./styles.css";
import React , {useState} from 'react';

export default function App() {
const [name , setName ]= useState("");

  return (
    <div className="App">
      <h1>Lifecyclemeathods</h1>
      <h2>This is how we will learn react</h2>
     <h2> {name}</h2>
      <button onClick = {()=> setName ('archit dadwal')} > click </button>
    </div>
  );
}  

*/

import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [name, setName] = useState("");
  useEffect(() => {
    //code here
  });

  return (
    <div className="App">
      <h1>Lifecyclemeathods</h1>
      <h2>This is how we will learn react</h2>
      <h2> {name}</h2>
      <button onClick={() => setName("archit dadwal")}> click </button>
    </div>
  );
}

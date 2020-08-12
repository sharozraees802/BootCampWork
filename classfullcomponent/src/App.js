// import React , {useState} from "react";

// function App() {
//  let[Count,setCount] = useState(0);
//   return <div className="App">
//     <h2>Count value is: {Count}</h2>
//     <br/>
//     <button onClick={()=>setCount(Count+1)}> Counter increament button</button>
//     <button onClick={()=>{
//       setCount(Count-1)

//     }}> Counter decrement button</button>
//   </div>;
// }

// export default App;

// import React , {useState} from "react";

// function App() {
//  let[Count,setCount] = useState(0);
//   return <div className="App">
//     <h2>Count value is: {Count}</h2>
//     <br/>
//     <button onClick={()=>setCount(++Count)}> Counter increament button</button>
//     <button onClick={()=>{
//       setCount(--Count)

//     }}> Counter decrement button</button>
//   </div>;
// }

// export default App;

import React, { useState } from "react";
import "./App.css";
import Count1 from "./Count";
function App() {
  let [Count, setCount] = useState(0);
  let [IsMorning, setMorning] = useState(true);

  return (
    <div className={` ${IsMorning ? "daylight" : "box"}`}>
      {/* <h2>Count value is: {Count}</h2> */}
      <h2> Good {IsMorning ? "Morning" : "Night"}</h2>
      <Count1 counter={Count} />
      <br />
      <button onClick={() => setCount(++Count)}>
       {" "}
        Counter increament button
      </button>
      &nbsp; &nbsp;
      <button
        onClick={() => {
          setCount(--Count);
        }}
      >
        {" "}
        Counter decrement button
      </button>
      &nbsp; &nbsp;
      <button onClick={() => setMorning(!IsMorning)}>
        color change baackground
      </button>
    </div>
  );
}

export default App;

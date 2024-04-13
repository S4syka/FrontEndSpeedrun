import React from "react";
import RandomTextGenerator from "./Components/RandomTextGenerator";

function App() {
  const size = 10; 
  return (
    <div>
      <RandomTextGenerator size = {size}/>
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';
import Dinner from './Dinner';
import Night from './Night';
function App() {
  return (
    <React.Fragment>
    <div className="App">
      <header className="App-header">
        <h1>hello good evening</h1>
        <Dinner DishName={prompt("please Enter a Dish name will you eat")}/>
        <Night feel="cold"/>
      </header>
    </div>
    </React.Fragment>
  );
}

export default App;

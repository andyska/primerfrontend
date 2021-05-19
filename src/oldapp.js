import './App.css';
import React, { useState } from 'react';
import Button from './Button.js';
import Button2 from './Button2.js';
import Display from './Display.js';
import CardList from './components/CardList.js';
import Form from './components/Form';


function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);
 
  const getHour = () => {
    const today = new Date()
    let hour = today.getHours()+':'+ today.getMinutes()+':'+today.getSeconds()
    console.log('hour' , hour)
    return hour
  }
  

  return (
    <div className="App">
      <Button onClickFunction={incrementCounter} increment={1}/>
      <Display message={counter}/>
      <Button2 onClickFunction={getHour}/>
      <Form/>
      <CardList/>
    </div>
  );
}

export default App;

import NewSleep from './components/NewSleep'
import SleepList from './components/SleepList'
import { useState } from 'react'
import './App.css'


function App() {
  const [sleeps, setSleeps] = useState();

  const addSleepHandler = (sleep) => {
    setSleeps((prevSleeps) => [sleep, ...prevSleeps]);
  };

  const clickHandler = (title) => {
    console.log("SLeep clicked: " + startTime);
  };

  return (
    <div>
      <h1>Sleep Tracker for an infant</h1>

      <NewSleep onAddSleep={addSleepHandler}/>
      <SleepList items = {sleeps}/>
    </div>
  )
}

export default App

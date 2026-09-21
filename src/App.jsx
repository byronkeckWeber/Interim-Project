import NewSleep from './components/NewSleep'
import SleepList from './components/SleepList'
import { useState } from 'react'
import './App.css'


function App() {
  const [sleeps, setSleeps] = useState([]);

  const addSleepHandler = (sleep) => {
    setSleeps((prevSleeps) => [sleep, ...prevSleeps]);
  };

  const deleteSleephandler = (id) => {
    setSleeps((prevSleeps) => prevSleeps.filter((sleep) => sleep.id !== id));
  };

  const toggleSleptHandler = (id) => {
    setSleeps((prevSleeps) =>
    prevSleeps.map((sleep) =>
    sleep.id === id ? { ...sleep, iSlept: !sleep.iSlept } : sleep));
  };


  return (
    <div>
      <h1>Sleep Tracker for an infant</h1>

      <NewSleep onAddSleep={addSleepHandler}/>
      <SleepList
        items = {sleeps}
        onDeleteSleep={deleteSleephandler}
        onToggleSlept={toggleSleptHandler}
      />
    </div>
  )
}

export default App

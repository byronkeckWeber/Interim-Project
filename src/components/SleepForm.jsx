import { useState } from "react";

function SleepForm(props) {
    const [enteredStartTime, setEnteredStartTime] = useState('');
    const [enteredEndTime, setEnteredEndTime] = useState('');
    const [enteredWakeUpAmount, setEnteredWakeUpAmount] = useState('');
    const [enteredWakeUpMethod, setEnteredWakeUpMethod] = useState('Himself');
    const [enteredRestfulness, setEnteredRestfulness] = useState('Normal');

    const submitHandler = (event) => {
        event.preventDefault();

        const sleepData = {
            startTime: enteredStartTime,
            endTime: enteredEndTime,
            wakeUpAmount: enteredWakeUpAmount,
            wakeUpMethod: enteredWakeUpMethod,
            restfulness: enteredRestfulness
        }

        props.onSaveSleepData(sleepData);

        setEnteredStartTime('');
        setEnteredEndTime('');
        setEnteredWakeUpAmount('');
        setEnteredWakeUpMethod('Himself');
        setEnteredRestfulness('Normal');
    }

    return (
        <form className="card" onSubmit={submitHandler}>
            <div className="form-style">
                <label>Start Time</label>
                <input type="time"
                value={enteredStartTime}
                onChange={(e) => setEnteredStartTime(e.target.value)}/>
            </div>
            <div className="form-style">
                <label>End Time</label>
                <input type="time"
                value={enteredEndTime}
                onChange={(e) => setEnteredEndTime(e.target.value)}/>
            </div>
            <div className="form-style">
                <label>How many times did they wake up?</label>
                <input type="number"
                value={enteredWakeUpAmount}
                onChange={(e) => setEnteredWakeUpAmount(e.target.value)}/>
            </div>
            <div className="form-style">
                <label>How did they wake up?</label>
                <select onChange={(e) => setEnteredWakeUpMethod(e.target.value)} value={enteredWakeUpMethod}>
                    <option value="Himself">They woke up by themselves.</option>
                    <option value="WokeHimUp">I woke them up.</option>
                    <option value="LoudNoise">A loud noise woke them up.</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="form-style">
                <label>How restful was the sleep?</label>
                <select onChange={(e) => setEnteredRestfulness(e.target.value)} value={enteredRestfulness}>
                    <option value="Great">Great</option>
                    <option value="Good">Good</option>
                    <option value="Normal">Normal</option>
                    <option value="Bad">Bad</option>
                    <option value="Terrible">Terrible</option>
                </select>
            </div>
            <button type="submit">Add Sleep</button>
        </form>
    );
}

export default SleepForm;
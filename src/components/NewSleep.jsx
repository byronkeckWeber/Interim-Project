import SleepForm from "./SleepForm"

function calculateDuration(startTime, endTime) {
    const [startHour, startMin] = startTime.split(':').map(Number);
    const [endHour, endMin] = entTime.split(':').map(Number);

    let startMinutes = startHour * 60 + startMin;
    let endMinutes = endHour * 60 + endMin;

    let diff = endMinutes - startMinutes;
    if (dif < 0) //If the sleep crossed over midnight.
                //Also why I can't check if the end time is before the start time.
        diff += 24 * 60;
    return diff;
}

function NewSleep(props) {
    const saveSleepDataHandler = (enteredSleepData) => {
        const sleepData = {
            ...enteredSleepData,
            duration: calculateDuration(enteredSleepData.startTime, enteredSleepData.endTime),
            id: Date.now().toString()
        }

        props.onAddSleep(sleepData);
    }

    return (
        <div>
            <SleepForm onSaveSleepData={saveSleepDataHandler}/>
        </div>
    );
}

export default NewSleep;
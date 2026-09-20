import SleepForm from "./SleepForm"

function NewSleep(props) {
    const saveSleepDataHandler = (enteredSleepData) => {
        const sleepData = {
            ...enteredSleepData,
            id: startTime
        }

        props.onAddSleep
    }

    return (
        <div>
            <SleepForm onAddSleep={saveSleepDataHandler}/>
        </div>
    );
}

export default NewSleep;
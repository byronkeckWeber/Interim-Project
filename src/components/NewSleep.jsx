import SleepForm from "./SleepForm"

function NewSleep(props) {
    const saveSleepDataHandler = (enteredSleepData) => {
        const sleepData = {
            ...enteredSleepData,
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
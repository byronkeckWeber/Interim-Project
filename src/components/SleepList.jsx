import { useState } from "react";
import SleepItem from "./SleepItem";
import SleepFilter from "./SleepFilter";
import SleepSummary from "./SleepSummary";

function SleepList(props) {
    const [filterRestfulness, setFilterRestfulness] = useState('All');

    const filterChangeHandler = (selectedType) => {
        setFilterRestfulness(selectedType);
    }

    const filteredSleeps = props.items.filter((sleep) => {
        if (filterRestfulness === 'All')
            return true;
        return sleep.wakeUpMethod === filterRestfulness;
    });

    return (
        <div className="card">
            <h2>Sleep Log</h2>
            <SleepFilter onChangeFilter={filterChangeHandler}/>
            <SleepSummary items = {filteredSleeps} type = {filterRestfulness}/>

            {filteredSleeps.length === 0 ?
            (<p>No sleeps found.</p>) :
            (filteredSleeps.map((sleep) => (
                <SleepItem
                key={sleep.id}
                startTime={sleep.startTime}
                endTime={sleep.endTime}
                duration={sleep.duration}
                wakeUpAmount={sleep.wakeUpAmount}
                wakeUpMethod={sleep.wakeUpMethod}
                restfulness={sleep.restfulness}
                />
            )))}
        </div>
    );
}

export default SleepList;
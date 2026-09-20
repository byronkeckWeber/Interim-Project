function formatDuration(minutes) {
    if (typeof minutes !== "number" || isNaN(minutes))
        return "N/A";
    const hours = Math.floor(minutes/60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
}

function SleepItem(props) {
    return (
        <div className="card">
            <h3>Start Time: {props.startTime}</h3>
            <p>End Time: {props.endTime}</p>
            <p>Duration:  {formatDuration(props.duration)}</p>
            <p>They woke up {props.wakeUpAmount} times</p>
            <p>They were woke up by: { props.wakeUpMethod === "Himself" ?
            ("Themself.") : (props.wakeUpMethod === "WokeHimUp" ?
                ("You.") : (props.wakeUpMethod === "LoudNoise" ?
                    ("a loud noise.") : ("something else.")
            ))}</p>
            <p>Their sleep was: {props.restfulness}</p>
        </div>
    );
}

export default SleepItem;
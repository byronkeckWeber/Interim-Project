function formatDuration(minutes) {
    if (typeof minutes !== "number" || isNaN(minutes))
        return "N/A";
    const hours = Math.floor(minutes/60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
}

function SleepItem(props) {
    const SleptCLickHandler = (event) => {
        props.onToggleSlept();
    }
    return (
        <div className="card" onClick={props.onDelete}>
            <div className="SleptToggle">
                <button
                    className="Sleep_Button"
                    onClick={SleptCLickHandler}
                    aria-label="Toggle your sleep">
                        {props.iSlept ? "★" : "☆"}
                </button>
                <span>NEW FUNCTION: Toggle if you slept as well</span>
            </div>
            <p className="start_time">Start Time: {props.startTime}</p>
            <p>End Time: {props.endTime}</p>
            <p>Duration:  {formatDuration(props.duration)}</p>
            <p>They woke up {props.wakeUpAmount} times</p>
            <p>They were woke up by: { props.wakeUpMethod === "Himself" ?
            ("Themself.") : (props.wakeUpMethod === "WokeHimUp" ?
                ("You.") : (props.wakeUpMethod === "LoudNoise" ?
                    ("a loud noise.") : ("something else.")
            ))}</p>
            <p>Their sleep was: {props.restfulness}</p>
            <p className="delete">Click anywhere on this card to delete it!</p>
        </div>
    );
}

export default SleepItem;
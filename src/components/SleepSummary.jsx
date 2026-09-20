function formatDuration(minutes) {
    if (typeof minutes !== "number" || isNaN(minutes))
        return "0h 0m";
    const hours = Math.floor(minutes/60);
    const mins = minutes % 60;
    return '${hours}h ${mins}m';
}

function SleepSummary(props) {
    const total = props.items.reduce((sum, sleep) =>
    sum + Number(sleep.duration || 0), 0);

    const amount = props.items.length;

    return (
        <div>
            <h3>Summary</h3>
            <p>Wakeup Method: {props.type}</p>
            <p>Amount of times slept: {amount}</p>
            <p>Total time slept: {formatDuration(total)}</p>
        </div>
    );
}

export default SleepSummary;
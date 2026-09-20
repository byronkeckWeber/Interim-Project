function SleepSummary(props) {
    const total = props.items.reduce((sum, sleep) =>
    sum + Number(sleep.duration), 0);

    const amount = props.items.length;

    return (
        <div>
            <h3>Summary</h3>
            <p>Wakeup Method: {props.wakeUpMethod}</p>
            <p>Amount of times slept: {amount}</p>
            <p>Total time slept: {total}</p>
        </div>
    );
}

export default SleepSummary;
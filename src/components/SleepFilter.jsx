function SleepFilter(props) {
    const dropDownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }

    return (
        <div>
            <label>Filter by Wake up Methods</label>
            <select onChange={dropDownChangeHandler} value={props.selected}>
                <option value="All">All</option>
                <option value="Himself">They woke up by themselves.</option>
                <option value="WokeHimUp">I woke them up.</option>
                <option value="LoudNoise">A loud noise woke them up.</option>
                <option value="Other">Other</option>
            </select>
        </div>
    );
}

export default SleepFilter;
import React, {useState} from "react";

export const ToDoForm = (props) => {
    const [task, setTask] = useState("")

    const handleSubmit = event => {
        event.preventDefault()
        props.addTask(task)
        setTask("")
    }

    const clearForm = event => {
        event.preventDefault();
        props.filter();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="task"
            placeholder="Enter a Chore"
            value={task}
            onChange={event => setTask(event.target.value)}
            />
            <button type="submit">Add Task!</button>
            <button onClick={clearForm}>Clear Completed Tasks</button>
        </form>
    );
}
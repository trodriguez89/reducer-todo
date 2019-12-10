import React, {useState} from "react";

export const ToDoForm = (props) => {
    const [task, setTask] = useState("")

    const handleSubmit = event => {
        event.preventDefault()
        props.addTask(task)
        setTask("")
    }

    const handleChanges = event => {
        setTask(event.target.value)
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
            onChange={handleChanges}
            />
            <button type="submit">Add Task!</button>
            <button onClick={clearForm}>Clear Completed Tasks</button>
        </form>
    );
}
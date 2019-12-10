import React from "react";

export const ToDoForm = () => {
    return (
        <form>
            <input
            type="text"
            name="task"
            placeholder="Enter a Chore"
            />
            <button>Add Task!</button>



        </form>
    );
}
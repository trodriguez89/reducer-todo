import React, {useState} from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
    background-color: #B7CDC1;
    padding: 5px;
    margin-right: 5px;
    border-radius: 5px;

`

const FormDiv = styled.div`
    display: flex;
    padding-top: 20px;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    margin: 0 auto;
`

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
        <FormDiv>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="task"
            placeholder="Enter a Chore"
            value={task}
            onChange={handleChanges}
            />
            <ButtonStyles type="submit">Add Task!</ButtonStyles>
            <ButtonStyles onClick={clearForm}>Clear Completed Tasks</ButtonStyles>
        </form>
        </FormDiv>
    );
}
import React from "react";
import {ToDo} from "./ToDo";
import styled from "styled-components";

const DivStyle = styled.div`
    display: flex;
    flex-wrap: wrap;

`

export const ToDoList = (props) => {
    
    return (
        <DivStyle>
            {props.todoState.map(item => (
                <ToDo 
                key={item.id}
                todos={item}
                toggle={props.toggle}
                />
            ))}
        </DivStyle>
    );
}
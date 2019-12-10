import React from "react";
import {ToDo} from "./ToDo";

export const ToDoList = (props) => {
    
    return (
        <div>
            {props.todoState.map(item => (
                <ToDo 
                key={item.id}
                todos={item}
                toggle={props.toggle}
                />
            ))}
        </div>
    );
}
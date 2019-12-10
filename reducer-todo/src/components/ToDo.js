import React from "react";

export const ToDo = (props) => {
    let styleClassName = "task";
    if (props.todos.completed){
        styleClassName = styleClassName + " completed ";
    }
    
    return (
        <div className={styleClassName}
        onClick={() => props.toggle(props.todos.id)}
        >
            <p>{props.todos.item}</p>
        </div>
    );
};



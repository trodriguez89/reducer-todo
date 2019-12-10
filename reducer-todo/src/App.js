import React, {useState, useReducer} from 'react';
import {initialState, toDoReducer} from "./reducers/todoReducer";
import {ToDoForm} from "./components/ToDoForm";
import {ToDoList} from "./components/ToDoList";
import logo from './logo.svg';
import './App.css';

function App() {
  const [todoState, dispatch] = useReducer(toDoReducer, initialState)

  const addTask = (item) => {
    dispatch({
      type: "ADD_TASK",
      payload: item
    })
  }

  const toggleComplete = item => {
    dispatch({
      type: "TOGGLE_COMPLETED",
      payload: item
    })
  }

  const filterCompleted = item => {
    dispatch({
      type: "FILTER"
    })
  }
  
  return (
    <div className="App">
      <ToDoForm addTask={addTask} filter={filterCompleted} />
      <ToDoList todoState={todoState.todos} toggle={toggleComplete} />
    </div>
  );
}

export default App;

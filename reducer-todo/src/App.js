import React, {useState, useReducer} from 'react';
import {initialState, toDoReducer} from "./reducers/todoReducer";
import {ToDoForm} from "./components/ToDoForm";
import {ToDoList} from "./components/ToDoList";
import styled from "styled-components";

import './App.css';

const H1Style = styled.h1`
  font-family: 'Solway', serif;
  margin: 0;
  
`
const NavDiv = styled.div`
  border-bottom: 2px dotted black;
`

function App() {
  const [todoState, dispatch] = useReducer(toDoReducer, initialState)

  const addTask = item => {
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
      <NavDiv>
      <H1Style>DO YOUR CHORES!</H1Style>
      </NavDiv>
      <ToDoForm addTask={addTask} filter={filterCompleted} />
      <ToDoList todoState={todoState.todos} toggle={toggleComplete} />
    </div>
  );
}

export default App;

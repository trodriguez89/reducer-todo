import React, {useState, useReducer} from 'react';
import {todoReducer, toDoReducer} from "./reducers/todoReducer";
import ToDoForm from "./components/ToDoForm";
import logo from './logo.svg';
import './App.css';

function App() {
  const [todoState, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <ToDoForm />
    </div>
  );
}

export default App;

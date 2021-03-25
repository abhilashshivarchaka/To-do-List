import React,{ Component } from 'react';
import './App.css';
import TodoList from './Component/ToDoList';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faEdit, faPlus);

function App() {
  return (
    <div className='todo-app'>
      <TodoList/>
    </div>
  );
}

  
export default App;
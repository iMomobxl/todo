import React, { useState, useEffect } from 'react'
import './App.css'
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdCheckBox } from "react-icons/md";
import { AiOutlineEdit } from 'react-icons/ai';
import { handleAddTodo } from "./js/handleAddTodo"
import { handleComplete } from "./js/handleComplete"
import { handleDeleteCompletedTodo } from "./js/handleDeleteCompletedTodo"
import { handleDeleteTodo } from "./js/handleDeleteTodo"
import { handleEdit } from './js/handleEdit';
import { handleUpdateTitle } from './js/handleUpdateTitle';
import { handleUpdateDescription } from './js/handleUpdateDescription';
import { handleUpdateTodo } from './js/handleUpdateTodo';

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false)
  const [allTodos, setTodos] = useState([])
  const [newTitle, setNewTitle] = useState("")
  const [newDescription, setNewDescription] = useState("")
  const [completedTodos, setCompletedTodos] = useState([])
  const [currentEdit, setCurrentEdit] = useState("")
  const [currentEditedItem, setCurrentEditedItem] = useState("")

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem('todolist'))
    let savedCompletedTodo = JSON.parse(localStorage.getItem('completedTodo'))
    if (savedTodo) {
      setTodos(savedTodo)
    }
    if (savedCompletedTodo) {
      setCompletedTodos(savedCompletedTodo)
    }
  }, [])

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <div className="todo-wrapper">

        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title</label>
            <input 
              type="text" 
              value={ newTitle }
              onChange={ (elem) => setNewTitle(elem.target.value) }
              placeholder="What's the task title?" 
            />
          </div>
          <div className="todo-input-item">
            <label>Description</label>
            <input 
              type="text" 
              value={ newDescription }
              onChange={ (elem) => setNewDescription(elem.target.value) }
              placeholder="What's the task description?" 
            />
          </div>
          <div className="todo-input-item">
            <button 
              type="button" 
              onClick={ () => handleAddTodo(newTitle, newDescription, allTodos, setTodos) }
              className="primaryBtn">
                Add
            </button>
          </div>
        </div>

        <div className="btn-area">
          <button 
            className={`secondaryBtn ${isCompleteScreen === false && 'active'}`}
            onClick={() => setIsCompleteScreen (false)}
          >
            TODO
          </button>
          <button 
            className={`secondaryBtn ${isCompleteScreen === true && 'active'}`}
            onClick={() => setIsCompleteScreen (true)}
          >
            Completed
          </button>
        </div>

        <div className="todo-list">
            {isCompleteScreen === false && allTodos.map((item, index) => {
              if(currentEdit === index) {
                return(
                  <div className='edit__wrapper' key={index}>
                    <input placeholder="Updated Title"
                            onChange={(event) => handleUpdateTitle(event.target.value, setCurrentEditedItem)}
                            value={currentEditedItem.title}
                    />
                    <textarea placeholder="Updated Description"
                            rows={4}
                            onChange={(event) => handleUpdateDescription(event.target.value, setCurrentEditedItem)}
                            value={currentEditedItem.description}
                    />
                    <button 
                            type="button" 
                            onClick={ () => handleUpdateTodo(currentEdit, allTodos, currentEditedItem, setTodos, setCurrentEdit) }
                            className="primaryBtn">
                            Update
                    </button>
                  </div>
                )
              } else {
                return (
                  <div className="todo-list-item" key={ index }>
                    <div>
                      <h3>{ item.title }</h3>
                      <p>{ item.description }</p>
                    </div>
                    <div>
                      <RiDeleteBin6Line 
                        className="icon" 
                        onClick={() => handleDeleteTodo(index, allTodos, setTodos)}
                        title="Delete?"
                      />
                      <MdCheckBox 
                        className="check-icon" 
                        onClick={() => handleComplete(index, allTodos, completedTodos, setTodos, setCompletedTodos)}
                        title="Complete?"
                      />
                      <AiOutlineEdit 
                        className="check-icon" 
                        onClick={() => handleEdit(index, item, setCurrentEdit, setCurrentEditedItem)}
                        title="Edit?"
                      />
                    </div>
                  </div>
                )
              }
            })}

            {isCompleteScreen === true && completedTodos.map((item, index) => {
              return (
                <div className="todo-list-item" key={ index }>
                  <div>
                    <h3>{ item.title }</h3>
                    <p>{ item.description }</p>
                    <p>Completed on: { item.completedOn }</p>
                  </div>
                  <div>
                    <RiDeleteBin6Line 
                      className="icon" 
                      onClick={() => handleDeleteCompletedTodo(index, completedTodos, setCompletedTodos)}
                      title="Delete?"
                    />
                  </div>
                </div>
              )
            })}
        </div>

      </div>
      <footer className="footer">
  ©     {new Date().getFullYear()} iMomo. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

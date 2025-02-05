export const handleAddTodo = (newTitle, newDescription, allTodos, setTodos) => {
    let newTodoItem = {
      title: newTitle,
      description: newDescription
    }

    let updatedTodoArr = [...allTodos]
    updatedTodoArr.push(newTodoItem)
    setTodos(updatedTodoArr)
    localStorage.setItem('todolist', JSON.stringify(updatedTodoArr))
}
export const handleUpdateTodo = (currentEdit, allTodos, currentEditedItem, setTodos, setCurrentEdit) => {
    let newTodo = [...allTodos]
    newTodo[currentEdit] = currentEditedItem
    setTodos(newTodo)
    localStorage.setItem('todolist', JSON.stringify(newTodo));
    setCurrentEdit("")
}
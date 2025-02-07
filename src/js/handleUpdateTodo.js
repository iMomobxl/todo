export const handleUpdateTodo = (currentEdit, allTodos, currentEditedItem, setTodos, setCurrentEdit) => {
    let newTodo = [...allTodos]
    newTodo[currentEdit] = currentEditedItem
    setTodos(newTodo)
    setCurrentEdit("")
}
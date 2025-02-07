export const handleUpdateTodo = (currentEdit, allTodos, currentEditedItem, setTodos, setCurrentEdit) => {
    let now = new Date()
    let day = now.getDate()
    let month = now.getMonth() + 1
    let year = now.getFullYear()
    let hour = now.getHours()
    let min = now.getMinutes()
    let sec = now.getSeconds()
    let editedOn = `${day}/${month}/${year} at ${hour}:${min}:${sec}`

    let updatedItem = { 
        ...currentEditedItem, 
        editedOn: editedOn 
    };

    let newTodo = [...allTodos]
    newTodo[currentEdit] = updatedItem
    setTodos(newTodo)
    localStorage.setItem('todolist', JSON.stringify(newTodo));
    setCurrentEdit("")
}
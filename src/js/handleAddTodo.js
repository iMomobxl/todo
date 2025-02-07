export const handleAddTodo = (newTitle, newDescription, allTodos, setTodos) => {
    let now = new Date()
    let day = now.getDate()
    let month = now.getMonth() + 1
    let year = now.getFullYear()
    let hour = now.getHours()
    let min = now.getMinutes()
    let sec = now.getSeconds()
    let addedOn = `${day}/${month}/${year} at ${hour}:${min}:${sec}`

    let newTodoItem = {
      title: newTitle,
      description: newDescription,
      addOn: addedOn
    }

    let updatedTodoArr = [...allTodos]
    updatedTodoArr.push(newTodoItem)
    setTodos(updatedTodoArr)
    localStorage.setItem('todolist', JSON.stringify(updatedTodoArr))
}
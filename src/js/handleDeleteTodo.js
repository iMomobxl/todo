export const handleDeleteTodo = (index, allTodos, setTodos) => {
    let newTodoList = [...allTodos]
    newTodoList.splice(index, 1)
    localStorage.setItem('todolist', JSON.stringify(newTodoList))
    setTodos(newTodoList)
}
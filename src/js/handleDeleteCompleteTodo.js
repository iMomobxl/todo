export const handleDeleteCompletedTodo = (index, completedTodos, setCompletedTodos) => {
    let newTodoList = [...completedTodos]
    newTodoList.splice(index, 1)

    localStorage.setItem('completedTodo', JSON.stringify(newTodoList))
    setCompletedTodos(newTodoList)
}
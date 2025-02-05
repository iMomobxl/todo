import { handleDeleteTodo } from "./handleDeleteTodo"

export const handleComplete = (index, allTodos, completedTodos, setTodos, setCompletedTodos) => {
    let now = new Date()
    let day = now.getDate()
    let month = now.getMonth() + 1
    let year = now.getFullYear()
    let hour = now.getHours()
    let min = now.getMinutes()
    let sec = now.getSeconds()
    let completedOn = `${day}/${month}/${year} at ${hour}:${min}:${sec}`

    let filteredItem = {
      ...allTodos[index],
      completedOn:completedOn
    }

    let updatedCompletedArr = [...completedTodos]
    updatedCompletedArr.push(filteredItem)
    setCompletedTodos(updatedCompletedArr)
    handleDeleteTodo(index, allTodos, setTodos)
    localStorage.setItem('completedTodo', JSON.stringify(updatedCompletedArr))
}
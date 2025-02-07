export const handleUpdateTitle = (value, setCurrentEditedItem) => {
    setCurrentEditedItem((prev) => {
        return {...prev, title:value}
    })
}
export const handleUpdateDescription = (value, setCurrentEditedItem) => {
    setCurrentEditedItem((prev) => {
        return {...prev, description:value}
    })
}
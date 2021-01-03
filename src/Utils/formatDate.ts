const formatDate = (date: string): string => {
    const formatedDate = new Date(date)
    const day = formatedDate.getDate() + 1 > 9 ? formatedDate.getDate() + 1 : `0${formatedDate.getDate() + 1}`
    const month = formatedDate.getMonth() + 1 > 9 ? formatedDate.getMonth() + 1 : `0${formatedDate.getMonth() + 1}` 
    const year = formatedDate.getFullYear()
    return `${day}/${month}/${year}`
}

export default formatDate;
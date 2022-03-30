const fruits = require('./fruits')


const GetAllFruits = () => {
    return fruits
}

const SearchUsers = (string) => {
    console.log(string)
    const result = fruits.filter(x => x.current_user.includes(string))
    return result
}

const GetAllParamecia = () => {
    const result = fruits.filter(x => x.type === "Paramecia")
    return result
}

const GetAllZoans = () => {
    const result = fruits.filter(x => x.type === "Zoan")
    return result
}

const GetAllMythicalZoans = () => {
    const result = fruits.filter(x => x.type === "Mythical Zoan")
    return result
}

const GetAllAncientZoans = () => {
    const result = fruits.filter(x => x.type === "Ancient Zoan")
    return result
}

const GetAllLogias = () => {
    const result = fruits.filter(x => x.type === "Logia")
    return result
}


module.exports = {
    GetAllFruits,
    SearchUsers,
    GetAllParamecia,
    GetAllZoans,
    GetAllAncientZoans,
    GetAllMythicalZoans,
    GetAllLogias,
}
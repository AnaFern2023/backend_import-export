export const firstName = (array) => {
    return array.shift()
}

export const allExceptOne = (array) => {
    return array.slice(0, -1)
}

//  andere Möglichkeit => 
// export const allExceptOne = (array) => {
// const localCopy = [...array]
// localCopy.pop()
// return localCopy
// }

export const lastName = (array) => {
    return array.pop()
}

export const allExceptFirst = (array) => {
    return array.slice(1)
}
// export const allExceptFirst = (array) => {
// const [first,...all] = arr
// return all
//  first könnte auch x oder so heißen, geht nur um die Position an welcher Stelle es steht

//  ...all = REST Operator
// ...array = SPREAD Operator


export const remove = (array, remove) => {
    return array.filter((elt) => {
        return (
            elt !== remove
        )
    })
}

export const removeDuplikate = (array) => {
    let newArr = [...new Set(array)]
    return newArr
}

export const sum = (array) => {
    return array.reduce((a, b) => a + b, 0)
}
export const randomNum = (param) => {
    return
}

export const stringName = (param) => {
    return param.slice(0, 1).toUpperCase() + param.substring(1)
}

export const stringName2 = (param) => {
    return param.toUpperCase()
}

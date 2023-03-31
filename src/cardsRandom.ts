// Методы для перемешивания карт
export const shuffle = (array: string[]) => {
    let currentIndex = array.length,
        randomIndex
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        ;[array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ]
    }
    return array
}

export const duplicateArray = (array: array<cardListData>) =>
    array.reduce((res, current) => res.concat([current, current]), [])

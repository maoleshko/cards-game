// Методы для перемешивания карт
export const shuffle = (): => {
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

export const duplicateArray = (array: string[]) => [...array, ...array]
    array.reduce((res:Array<String>, current: String) => res.concat([current, current]), [])

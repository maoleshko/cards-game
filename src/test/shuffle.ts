// const area = (radius) => Math.PI * radius ** 2
// const circumference = (radius) => 2 * Math.PI * radius
// module.exports = { duplicateArray }

// Методы для перемешивания карт


interface Card {
    id: string
    name: string
    image: string
}
export const shuffle = (array: Card[]) => {
    let count: number = array.length
    let currentIndex = count,
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

export const duplicateArray = (array: Card[]): Card[] => {
    const duplicated = [...array, ...array]
    return duplicated.reduce(
        (res: Card[], current: Card) => res.concat([current]),
        []
    )
}


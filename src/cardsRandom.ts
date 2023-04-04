// Методы для перемешивания карт
interface cardList {
    id: string
    name: string
    image: string
}
export const shuffle = (array: cardList[]) => {
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

interface MyInterface {
    type: string
}
let array: MyInterface[] = []

export const duplicateArray = (array: cardList[]): cardList[] => {
    const duplicated = [...array, ...array]
    return duplicated.reduce(
        (res: cardList[], current: cardList) => res.concat([current]),
        []
    )
}

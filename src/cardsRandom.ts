// Методы для перемешивания карт
interface cardList {
    id: string
    name: string
    image: string
}
export const shuffle = (array:cardList[]) => {
    let count:number = array.length
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

export const duplicateArray = (array:cardList[]) => [...array, ...array]
    array.reduce((res:string , current:string ) => res.concat([current, current]), [])

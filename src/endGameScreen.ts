import { resetGame } from './reloadGame'

// Экран вывода победы и поражения
export function renderEndScreen(Status: string, image: string) {
    const min = document.querySelector('.timemin')
    const sec = document.querySelector('.timesec')
    const element = document.querySelector('.timemin')

    if (min !== null && sec !== null) {
        let minuts: string = min!.innerHTML
        let seconds: string = sec!.innerHTML
       
        window.application.time =  minuts + '.' + seconds
    }
    let timeTime: string | [] = window.application.time
    let timeStr:string = timeTime.toString()
    console.log(timeStr)
    
    const gameMenu = document.querySelector('.game-menu') as HTMLElement
    gameMenu.textContent = ''
    const gamecontainer = document.querySelector('.container') as HTMLElement
    gamecontainer.textContent = ''
    const APP_CONTAINER = document.querySelector('.app') as HTMLElement
    APP_CONTAINER.innerHTML = ''
    window.application.levels = ''

    const emojiImage = document.createElement('div') as HTMLElement
    emojiImage.classList.add('emojiImage')
    emojiImage.style.backgroundImage = image

    const title = document.createElement('h1') as HTMLElement
    title.classList.add('title')
    title.textContent = Status

    const h2 = document.createElement('h2') as HTMLElement
    h2.classList.add('timeRoundLabel')
    h2.textContent = 'Затраченное время:'

    const timeRound = document.createElement('h1') as HTMLElement
    timeRound.classList.add('timeRound')
    timeRound.innerHTML = ''
    timeRound.textContent = timeStr
    window.application.stopInterval()

    const buttonRestart = document.createElement('button') as HTMLElement
    buttonRestart.classList.add('button-restart', 'button')
    buttonRestart.textContent = 'Играть снова'
    buttonRestart.addEventListener('click', resetGame)

    APP_CONTAINER.classList.remove('hide')
    APP_CONTAINER.appendChild(emojiImage)
    APP_CONTAINER.appendChild(title)
    APP_CONTAINER.appendChild(h2)
    APP_CONTAINER.appendChild(timeRound)

    APP_CONTAINER.appendChild(buttonRestart)
}

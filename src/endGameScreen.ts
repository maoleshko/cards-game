import { resetGame } from './reloadGame'

// Экран вывода победы и поражения
export function renderEndScreen(Status: string, image: string) {
    const min = document.querySelector('.timemin').textContent
    const sec = document.querySelector('.timesec').textContent 
    window.application.time = min + '.' + sec
    const gameMenu = document.querySelector('.game-menu') as Element
    gameMenu.textContent = ''
    const gamecontainer = document.querySelector('.container') as Element
    gamecontainer.textContent = ''
    const APP_CONTAINER = document.querySelector('.app') as Element
    APP_CONTAINER.innerHTML = ''
    window.application.levels = ''

    const emojiImage = document.createElement('div')
    emojiImage.classList.add('emojiImage')
    // emojiImage.style.backgroundImage = "url('./static/img/lose.png')"
    emojiImage.style.backgroundImage = image
    console.log(image)
    console.log(emojiImage)

    const title = document.createElement('h1')
    title.classList.add('title')
    title.textContent = Status

    const h2 = document.createElement('h2')
    h2.classList.add('timeRoundLabel')
    h2.textContent = 'Затраченное время:'

    const timeRound = document.createElement('h1')
    timeRound.classList.add('timeRound')
    timeRound.textContent = window.application.time
    window.application.stopInterval()

    const buttonRestart = document.createElement('button')
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

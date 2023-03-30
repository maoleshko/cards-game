import { renderCardList } from './cartListData'
import { resetGame } from './index'

export function renderBlockChoice(levelContent) {
    const buttonName = [1, 2, 3]
    buttonName.forEach((elements) => {
        const buttonLevels = document.createElement('input')
        buttonLevels.setAttribute('type', 'radio')
        buttonLevels.setAttribute('value', elements)
        buttonLevels.setAttribute('id', elements)
        buttonLevels.setAttribute('name', 'group-button')
        buttonLevels.classList.add('input', 'button')
        const buttonLabel = document.createElement('label')
        buttonLabel.setAttribute('for', elements)
        buttonLabel.classList.add('button-label')
        buttonLabel.textContent = elements
        levelContent.appendChild(buttonLevels)
        levelContent.appendChild(buttonLabel)
    })
}

export function renderScreenChoice() {
    const APP_CONTAINER = document.querySelector('.app')
    const title = document.createElement('h1')
    title.classList.add('title')
    title.textContent = 'Выбери сложность'
    const levelContent = document.createElement('div')
    levelContent.classList.add('level-content')
    const ButtonStart = document.createElement('button')
    ButtonStart.classList.add('button-start', 'button')
    ButtonStart.textContent = 'Старт'
    ButtonStart.addEventListener('click', gameStart)
    APP_CONTAINER.appendChild(title)
    window.application.renderBlock('blockChoice', levelContent)
    APP_CONTAINER.appendChild(levelContent)
    APP_CONTAINER.appendChild(ButtonStart)
}

function gameStart() {
    const APP_CONTAINER = document.querySelector('.app')
    const button = document.querySelectorAll('.button')
    for (const control of button) {
        if (control.checked === true) {
            window.application.levels = control.value
            APP_CONTAINER.innerHTML = ''
            APP_CONTAINER.classList.add('hide')
            switch (window.application.levels) {
                case '1':
                    renderCardList(3)
                    break
                case '2':
                    renderCardList(6)
                    break
                case '3':
                    renderCardList(9)
                    break
                default:
                    break
            }
        }
    }
}

export function renderLoseScreen() {
    document.body.innerHTML = ''
    const div = document.createElement('div')
    div.classList.add('app')

    const title = document.createElement('h1')
    title.classList.add('title')
    title.textContent = 'Вы проиграли!'

    const label = document.createElement('h2')
    label.classList.add('timeLabel')
    label.textContent = 'Затраченное время:'

    //timer

    const buttonRestart = document.createElement('button')
    buttonRestart.classList.add('button-restart', 'button')
    buttonRestart.textContent = 'Играть снова'
    buttonRestart.addEventListener('click', resetGame)

    document.body.appendChild(div)
    div.appendChild(title)
    div.appendChild(label)
    div.appendChild(buttonRestart)
}

export function renderWinScreen() {
    document.body.innerHTML = ''
    const div = document.createElement('div')
    div.classList.add('app')

    const title = document.createElement('h1')
    title.classList.add('title')
    title.textContent = 'Вы победили!'

    const label = document.createElement('h2')
    label.classList.add('timeLabel')
    label.textContent = 'Затраченное время:'

    //timer

    const buttonRestart = document.createElement('button')
    buttonRestart.classList.add('button-restart', 'button')
    buttonRestart.textContent = 'Играть снова'
    buttonRestart.addEventListener('click', resetGame)

    document.body.appendChild(div)
    div.appendChild(title)
    div.appendChild(label)
    div.appendChild(buttonRestart)
}

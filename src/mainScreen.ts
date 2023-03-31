import { gameStart } from './gameStart'

// Экран выбора сложности игры
export function renderBlockChoice(levelContent: Element): void {
    const buttonName = ['1', '2', '3']
    buttonName.forEach((elements) =>{
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
    const APP_CONTAINER = document.querySelector('.app') as Element
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

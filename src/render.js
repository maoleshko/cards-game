function renderBlockChoice(levelContent) {
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

function renderScreenChoice() {
    const app = document.querySelector('.app')
    const title = document.createElement('h1')
    title.classList.add('title')
    title.textContent = 'Выбери сложность'

    const levelContent = document.createElement('div')
    levelContent.classList.add('level__content')
    const buttonStart = document.createElement('button')
    buttonStart.classList.add('button__start', 'button')
    buttonStart.textContent = 'Старт'

    window.application.renderBlock('blockChoice', levelContent)
    app.appendChild(title)
    app.appendChild(levelContent)
    app.appendChild(buttonStart)
}

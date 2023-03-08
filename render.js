function renderBlockChoice(levelContent) {
    const buttonName = [1, 2, 3];
    buttonName.forEach(elements => {
        const buttonsLevels = document.createElement('input');
        buttonsLevels.setAttribute('type', 'radio');
        buttonsLevels.setAttribute('value', elements);
        buttonsLevels.setAttribute('id', elements);
        buttonsLevels.setAttribute('name', 'group-buttons');
        buttonsLevels.classList.add('input', 'buttons');

        const buttonsLabel = document.createElement('label');
        buttonsLabel.setAttribute('for', elements);
        buttonsLabel.classList.add('buttons-label');
        buttonsLabel.textContent = elements;

        levelContent.appendChild(buttonsLevels);
        levelContent.appendChild(buttonsLabel);
    });
}

function renderScreenChoice () {
    const app = document.querySelector('.app');
    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Выбери сложность';

    const levelContent = document.createElement('div');
    levelContent.classList.add('level__content');
    const buttonStart = document.createElement('button');
    buttonStart.classList.add('button__start');
    buttonStart.textContent = 'Старт';

    window.application.renderBlock('blockChoice', levelContent);
    app.appendChild(title);
    app.appendChild(levelContent);
    app.appendChild(buttonStart);
}
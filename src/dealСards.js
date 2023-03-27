// Игровое поле с таймером и кнопкой
function renderPlayBlock(container) {
    document.body.innerHTML = "";
    const div = document.createElement('div')
    div.classList.add('game-menu')
    const h1 = document.createElement('h1')
    h1.textContent = '00:00'
    h1.classList.add('timer')

    const resetButton = document.createElement('button')
    resetButton.textContent = 'Начать заново'
    resetButton.classList.add('button', 'btn-reset')

    div.appendChild(h1)
    div.appendChild(resetButton)
    container.appendChild(div)     
}

window.application.blocks['play'] = renderPlayBlock

function renderPlayScreen() {
    const div = document.createElement('div');
    div.classList.add('content'); 
    window.application.renderBlock('play', div);
    document.body.appendChild(div)    
}

window.application.screens['play'] = renderPlayScreen

function renderLoseBlock(container) {
    
    document.body.innerHTML = "";
    const div = document.createElement('div')
    div.classList.add('result')

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
    
    div.appendChild(title)
    div.appendChild(label)
    div.appendChild(buttonRestart)
    container.appendChild(div) 

     
}

window.application.blocks['lose'] = renderLoseBlock
// Экран проигрыша
function renderLoseScreen() {
    
    const div = document.createElement('div');
    div.classList.add('content');
    window.application.renderBlock('lose', div);
    document.body.appendChild(div)    
}

window.application.screens['lose'] = renderLoseScreen

// window.application.renderScreen('lose');

// Экран победы
function renderWinBlock(container) {
    
    document.body.innerHTML = "";
    const div = document.createElement('div')
    div.classList.add('result')

    const title = document.createElement('h1')
    title.classList.add('title')
    title.textContent = 'Вы выиграли!'

    const label = document.createElement('h2')
    label.classList.add('timeLabel')
    label.textContent = 'Затраченное время:'

    //timer

    const buttonRestart = document.createElement('button')
    buttonRestart.classList.add('button-restart', 'button')
    buttonRestart.textContent = ('Играть снова')
    
    div.appendChild(title)
    div.appendChild(label)
    div.appendChild(buttonRestart)
    container.appendChild(div) 

     
}

window.application.blocks['win'] = renderWinBlock

function renderWinScreen() {
   
    const div = document.createElement('div');
    div.classList.add('content');
    window.application.renderBlock('win', div);
    document.body.appendChild(div)    
}

window.application.screens['win'] = renderWinScreen
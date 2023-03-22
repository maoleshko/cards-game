
function renderPlayBlock(container) {
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

function renderCardListBlock(container) {
    
   
    
}

window.application.blocks['cardList'] = renderCardListBlock

function renderPlayScreen() {
    
    window.application.renderBlock('play', div);
    window.application.renderBlock('cardList', div);

    document.body.appendChild(div)    
}

window.application.screens['play'] = renderPlayScreen

// window.application.renderScreen('play');



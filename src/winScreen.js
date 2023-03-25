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




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

function renderLoseScreen() {
    
    const div = document.createElement('div');
    div.classList.add('content');
    window.application.renderBlock('lose', div);
    document.body.appendChild(div)    
}

window.application.screens['lose'] = renderLoseScreen

// window.application.renderScreen('lose');



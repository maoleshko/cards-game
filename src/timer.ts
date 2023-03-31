//Таймер
export function timer(): void {
    let secs = 0
    let mins = 0
    const timemin = document.querySelector('.timemin') as Element
    const timesec = document.querySelector('.timesec')

    const gameTime = setInterval(function () {
        secs++
        if (secs === 60) {
            secs = 0
            mins++
        }
        timemin.textContent = mins < 10 ? '0' + mins : mins 
        timesec.textContent = secs < 10 ? '0' + secs : secs
    }, 1000)
    window.application.timers.push(gameTime)
}

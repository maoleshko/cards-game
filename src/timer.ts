//Таймер
export function timer(): void {
    let secs = 0
    let mins = 0
    const timemin = document.querySelector('.timemin') as HTMLElement
    timemin!.innerHTML = String(timemin)
    const timesec = document.querySelector('.timesec') as HTMLElement
    timesec!.innerHTML = String(timesec)

    const gameTime = setInterval(function () {
        secs++
        if (secs === 60) {
            secs = 0
            mins++
        }
        let clockmin: string | number = mins < 10 ? '0' + mins : mins 
        timemin.textContent = clockmin.toString()
        let clocksec: string | number = secs < 10 ? '0' + secs : secs
        timesec.textContent = clocksec.toString()
        window.application.time = mins + '.' + secs
    }, 1000)
    window.application.timers.push(gameTime)
    
}

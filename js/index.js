const p = document.querySelector('p')

function relogio(){
    const hms = new Date()
    const h = hms.getHours()
    const m = hms.getMinutes()
    const s = hms.getSeconds()

    if( s < 10) return p.innerHTML = `${h}:${m}:0${s}`

    p.innerHTML = `${h}:${m}:${s}`
}


setInterval(relogio, 1000);
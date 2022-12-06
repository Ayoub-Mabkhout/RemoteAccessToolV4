const RxBuffer = rhr.RxHR.getBuffer(`http://${window.location.host}/remote/screenshot`)
const img = document.getElementById('img')
const inp = document.getElementsByTagName('input')[0]
const btn = document.getElementsByTagName('button')[0]
let myInterval = null
let on = false

function update() {
    RxBuffer.subscribe(data => {
        let b64encoded = data.body.toString('base64')
        let src = 'data:image/jpeg;base64,' + b64encoded
        img.src = src
    })

}



function btnClicked() {
    console.log(on)
    if (on) {
        clearInterval(myInterval)
        btn.textContent = "Start"
    } else {
        let n = Number(inp.value)
        if (n <= 0)
            n = 1
        btn.textContent = "Stop"
        myInterval = setInterval(update, 1000 * n)
    }
    on = !on
}
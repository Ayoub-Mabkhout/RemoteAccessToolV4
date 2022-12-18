const RxBuffer = rhr.RxHR.getBuffer(`http://${window.location.host}/remote/screenshot`)
const img = document.getElementById('img')
const inp = document.getElementsByTagName('input')[0]

function update() {
    RxBuffer.subscribe(data => {
        let b64encoded = data.body.toString('base64')
        let src = 'data:image/jpeg;base64,' + b64encoded
        img.src = src
    })

}

let myInterval = setInterval(update, 17)

function btnClicked() {
    let n = inp.value
    if (n <= 0) n = 1
    clearInterval(myInterval)
    myInterval = setInterval(update, 1000 * n)
}
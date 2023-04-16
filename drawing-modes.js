let greyModeActivated = false
let rainbowModeActivated = false
let eraserActivated = false
let mouseoverActivated = false
let lastClicked = 'grey'

const greyMode = document.querySelector('#grey')
greyMode.addEventListener('click', function(){
    if (mouseoverActivated) {
        greyModeActivated = true
        rainbowModeActivated = false
        eraserActivated = false
    }
    lastClicked = 'grey'
})
const rainbowMode = document.querySelector('#rainbow')
rainbowMode.addEventListener('click', function(){
    if (mouseoverActivated) {
        greyModeActivated = false
        rainbowModeActivated = true
        eraserActivated = false
    }
    lastClicked = 'rainbow'
})

const eraser = document.querySelector('#eraser')
eraser.addEventListener('click', function(){
    if (mouseoverActivated) {
        greyModeActivated = false
        rainbowModeActivated = false
        eraserActivated = true
    }
    lastClicked = 'eraser'
})

container.addEventListener('click', function(){
    mouseoverActivated = !mouseoverActivated
    if (!mouseoverActivated) {
        greyModeActivated = false
        rainbowModeActivated = false
        eraserActivated = false
    }
    else {
        if (lastClicked == 'grey') {
            greyModeActivated = true
        }
        if (lastClicked == 'rainbow') {
            rainbowModeActivated = true
        }
        if (lastClicked == 'eraser') {
            eraserActivated = true
        }
    }
})
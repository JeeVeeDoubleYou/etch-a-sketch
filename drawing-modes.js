let greyModeActivated = false
let rainbowModeActivated = false
let eraserActivated = false
let mouseoverActivated = false
let lastClicked = 'grey'

container.addEventListener('click', toggle)
toggleButton.addEventListener('click', toggle)

const greyMode = document.querySelector('#grey')
greyMode.addEventListener('click', function(){
    if (mouseoverActivated) {
        greyModeActivated = true
        rainbowModeActivated = false
        eraserActivated = false
        greyMode.style.backgroundColor = '#24a0ed'
    }
    else {
        greyMode.style.backgroundColor = 'grey'
    }
    lastClicked = 'grey'
    rainbowMode.style.backgroundColor = ''
    eraser.style.backgroundColor = ''
})

greyMode.style.backgroundColor = 'grey' 

const rainbowMode = document.querySelector('#rainbow')
rainbowMode.addEventListener('click', function(){
    if (mouseoverActivated) {
        greyModeActivated = false
        rainbowModeActivated = true
        eraserActivated = false
        rainbowMode.style.backgroundColor = '#24a0ed'
    }
    else {
        rainbowMode.style.backgroundColor = 'grey'
    }
    lastClicked = 'rainbow'
    greyMode.style.backgroundColor = ''
    eraser.style.backgroundColor = ''
})

const eraser = document.querySelector('#eraser')
eraser.addEventListener('click', function(){
    if (mouseoverActivated) {
        greyModeActivated = false
        rainbowModeActivated = false
        eraserActivated = true
        eraser.style.backgroundColor = '#24a0ed'
    }
    else {
        eraser.style.backgroundColor = 'grey'
    }
    greyMode.style.backgroundColor = ''
    rainbowMode.style.backgroundColor = ''
    lastClicked = 'eraser'
})

function toggle() {
    mouseoverActivated = !mouseoverActivated
    if (!mouseoverActivated) {
        greyModeActivated = false
        rainbowModeActivated = false
        eraserActivated = false
        if (lastClicked == 'grey') {
            greyMode.style.backgroundColor = 'grey'
        }
        if (lastClicked == 'rainbow') {
            rainbowMode.style.backgroundColor = 'grey'
        }
        if (lastClicked == 'eraser') {
            eraser.style.backgroundColor = 'grey'
        }
    }
    else {
        if (lastClicked == 'grey') {
            greyModeActivated = true
            greyMode.style.backgroundColor = '#24a0ed'
        }
        if (lastClicked == 'rainbow') {
            rainbowModeActivated = true
            rainbowMode.style.backgroundColor = '#24a0ed'
        }
        if (lastClicked == 'eraser') {
            eraserActivated = true
            eraser.style.backgroundColor = '#24a0ed'
        }
    }
}
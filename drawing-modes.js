let greyModeActivated = false
let rainbowModeActivated = false
let eraserActivated = false
let customPenActivated = false
let mouseoverActivated = false
let lastClicked = 'grey'
let customPenColorPick

container.addEventListener('click', toggle)
toggleButton.addEventListener('click', toggle)

const greyMode = document.querySelector('#grey')
greyMode.addEventListener('click', function(){
    if (mouseoverActivated) {
        greyModeActivated = true
        rainbowModeActivated = false
        eraserActivated = false
        customPenActivated = false
        greyMode.style.backgroundColor = '#24a0ed'
    }
    else {
        greyMode.style.backgroundColor = 'grey'
    }
    lastClicked = 'grey'
    rainbowMode.style.backgroundColor = ''
    eraser.style.backgroundColor = ''
    customPenButton.style.backgroundColor = ''
})

greyMode.style.backgroundColor = 'grey' 

const rainbowMode = document.querySelector('#rainbow')
rainbowMode.addEventListener('click', function(){
    if (mouseoverActivated) {
        greyModeActivated = false
        rainbowModeActivated = true
        eraserActivated = false
        customPenActivated = false
        rainbowMode.style.backgroundColor = '#24a0ed'
    }
    else {
        rainbowMode.style.backgroundColor = 'grey'
    }
    lastClicked = 'rainbow'
    greyMode.style.backgroundColor = ''
    eraser.style.backgroundColor = ''
    customPenButton.style.backgroundColor = ''
})

const eraser = document.querySelector('#eraser')
eraser.addEventListener('click', function(){
    if (mouseoverActivated) {
        greyModeActivated = false
        rainbowModeActivated = false
        eraserActivated = true
        customPenActivated = false
        eraser.style.backgroundColor = '#24a0ed'
    }
    else {
        eraser.style.backgroundColor = 'grey'
    }
    greyMode.style.backgroundColor = ''
    rainbowMode.style.backgroundColor = ''
    customPenButton.style.backgroundColor = ''
    lastClicked = 'eraser'
})

function toggle() {
    mouseoverActivated = !mouseoverActivated
    if (!mouseoverActivated) {
        greyModeActivated = false
        rainbowModeActivated = false
        eraserActivated = false
        customPenActivated = false
        if (lastClicked == 'grey') {
            greyMode.style.backgroundColor = 'grey'
        }
        if (lastClicked == 'rainbow') {
            rainbowMode.style.backgroundColor = 'grey'
        }
        if (lastClicked == 'eraser') {
            eraser.style.backgroundColor = 'grey'
        }
        if (lastClicked == 'custom') {
            customPenButton.style.backgroundColor = 'grey'
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
        if (lastClicked == 'custom') {
            customPenActivated = true
            customPenButton.style.backgroundColor = '#24a0ed'
        }
    }
}

customPenButton.addEventListener('click', function(){
    if (mouseoverActivated) {
        greyModeActivated = false
        rainbowModeActivated = false
        eraserActivated = false
        customPenActivated = true
        customPenButton.style.backgroundColor = '#24a0ed'
    }
    else {
        customPenButton.style.backgroundColor = 'grey'
    }
    lastClicked = 'custom'
    greyMode.style.backgroundColor = ''
    rainbowMode.style.backgroundColor = ''
    eraser.style.backgroundColor = ''
    customPenColorPick =  new jscolor(customPenButton);
})
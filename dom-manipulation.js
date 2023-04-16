const container = document.querySelector('.container')

const div = document.createElement('div')
div.setAttribute("class", "grid")

const gridSizeButton = document.querySelector('button')
gridSizeButton.addEventListener('click', changeGridSize)

let greyModeActivated = true
let rainbowModeActivated = false

const greyMode = document.querySelector('#grey')
greyMode.addEventListener('click', function(){
    greyModeActivated = true
    rainbowModeActivated = false
})
const rainbowMode = document.querySelector('#rainbow')
rainbowMode.addEventListener('click', function(){
    greyModeActivated = false
    rainbowModeActivated = true
})

createGrid(16)

function createGrid(size){
    container.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
    while (container.firstChild) {
        container.firstChild.remove()
    }
    i = 0
    while (i < size*size) {
        let div_prime = div.cloneNode(true)
        container.appendChild(div_prime)
        i++
    }
    listenForMouseover()
}

function listenForMouseover() {
    const squares = document.querySelectorAll('.grid') 
    squares.forEach(square => {
        square.addEventListener('mouseover', function(){
            if (greyModeActivated) {
                square.style.backgroundColor = 'black'
            }
            if (rainbowModeActivated) {
                square.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
            }
        })
    })
}

 function changeGridSize() {
    let size = prompt('Please pick how many squares wide the grid should be')
    let gridMade = false
    while (!gridMade) {
        if (!isNaN(size)) {
            if (size <= 75) {
                createGrid(size)
                gridMade = true
            }
            else {
                size = prompt("Please pick a number smaller or equal to 75")
            }
        }
        else {
            size = prompt("Please pick a number")
        }
    }
 }
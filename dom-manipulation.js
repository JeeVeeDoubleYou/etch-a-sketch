const container = document.querySelector('.container')

const div = document.createElement('div')
div.setAttribute("class", "grid")

function createGrid(size){
    while (container.firstChild) {
        container.firstChild.remove()
    }
    i = 0
    while (i < size*size) {
        let div_prime = div.cloneNode(true)
        container.appendChild(div_prime)
        i++
    }
}

createGrid(16)

const squares = document.querySelectorAll('.grid') 

squares.forEach(square => {
    square.addEventListener('mouseover', function(){
        square.style.backgroundColor = 'black'
    })
})

const gridSizeButton = document.querySelector('button')
gridSizeButton.addEventListener('click', function(){
    let size = prompt('Please pick how many squares wide the grid should be')
    createGrid(size)
})
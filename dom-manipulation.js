const container = document.querySelector('.container')

const div = document.createElement('div')
div.setAttribute("class", "grid")

function createGrid(){
    i = 0
    while (i < 16*16) {
        let div_prime = div.cloneNode(true)
        container.appendChild(div_prime)
        i++
    }
}

createGrid()
let container = document.querySelector('.main');
const changeSize = document.getElementById('change-size');
const reset = document.getElementById('reset');
const gridSize = document.getElementById('size');

const resetValue = gridSize.value = 32;

function createGrid(gridSize) {
    container.style.setProperty('--grid-rows', gridSize);
    for (let  i = 0; i < (gridSize * gridSize); i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("grid");
        container.appendChild(newDiv);
    }
};

container.addEventListener("mouseover", (event)=> {
    if (event.currentTarget !== event.target) {
        event.target.setAttribute("class", "onmouseover");

    }
})

changeSize.addEventListener("click", ()=> {
    container.innerHTML = " ";
    console.log(gridSize.value);
    if(gridSize.value > 64) {
        alert("max size is 64")
    } else {
        createGrid(gridSize.value)
    }
})

createGrid(gridSize.value);

function resetGrid() {
    container.innerHTML = " ";
    createGrid(resetValue);
}

reset.addEventListener("click", resetGrid)
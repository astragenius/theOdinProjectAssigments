const grid = document.getElementById('container');
const rangeInput = document.querySelector('input[type="range"]');






function createItem() {

    const item = document.createElement("div");
    item.setAttribute('class', 'item');
    item.addEventListener('mouseenter', setColor);
    grid.appendChild(item);

}


function createGrid(size = 16) {
    grid.style.cssText = `grid-template-columns: repeat(${size}, auto); grid-template-rows: repeat(${size}, auto);`;

    for(let i = 0; i < (size * size); i++) {

        createItem();
        
    }
}

function setColor(e) {
    e.target.style.cssText = "background-color: black;";
    
}

function removeItems() {
    const item = document.querySelectorAll('.item');
    
    item.forEach(el => { el.remove(); })

}

rangeInput.addEventListener('change', () => {

    removeItems();
    createGrid(rangeInput.value);
})

createGrid(rangeInput.defaultValue);
const grid = document.getElementById('container');
const rangeInput = document.querySelector('input[type="range"]');






function createItem() {

    const item = document.createElement("div");
    item.setAttribute('class', 'item');
    grid.appendChild(item);

}


function createGrid(size = 16) {
    grid.style.cssText = `grid-template-columns: repeat(${size}, auto); grid-template-rows: repeat(${size}, auto);`;

    for(let i = 0; i < (size * size); i++) {

        createItem();
        
    }
}

function removeItems() {
    const item = document.querySelectorAll('.item');
    
    item.forEach(el => { el.remove(); })

}

rangeInput.addEventListener('change', () => {

    removeItems();
    createGrid(rangeInput.value);
})


console.log(rangeInput.defaultValue)


createGrid(rangeInput.defaultValue);
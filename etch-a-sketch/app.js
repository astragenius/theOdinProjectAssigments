const grid = document.getElementById('container');
const rangeInput = document.querySelector('input[type="range"]');






function createItem() {

    const item = document.createElement("div");
    item.setAttribute('class', 'item');
    grid.appendChild(item);

}


function createGrid(size) {

    grid.style.cssText = `grid-template-columns: repeat(${size}, auto); grid-template-rows: repeat(${size}, auto);`;
    for(let i = 0; i < (size * size); i++) {

        createItem();
        
    }
}

createGrid(48);


console.log(rangeInput.value);









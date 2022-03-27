const grid = document.getElementById('container');





function createItem() {

    const item = document.createElement("div");
    item.setAttribute('class', 'item');
    grid.appendChild(item);

}


function createGrid(size) {

    for(let i = 0; i < size; i++) {

        createItem();
        
    }
}

createGrid((16 * 16));










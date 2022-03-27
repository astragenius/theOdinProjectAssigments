const grid = document.getElementById('container');
const rangeInput = document.querySelector('input[type="range"]');
const eraseBtn = document.querySelector('.erase-btn');
const colorBtn = document.querySelector('.color-btn');
let currendColor = 'black';
let rgbColor = "";





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

function setCurrentColor(color) {

    currendColor = color;
}

function randomColor() {
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    rgbColor = `rgb(${red}, ${blue}, ${green});`
    console.log(rgbColor);
    return rgbColor;
}
randomColor();


function setColor(e) {
    if(currendColor == 'black') {
        e.target.style.cssText = `background-color: ${currendColor}`;
    }else if(currendColor == 'white') {
        e.target.style.cssText = `background-color: ${currendColor}`;
    }else {
        e.target.style.cssText = `background-color: ${rgbColor}`;
    }
    
}

eraseBtn.addEventListener('click', () => {
    setCurrentColor('white');
})

colorBtn.addEventListener('click', () => {
    setCurrentColor('black');
})


rangeInput.addEventListener('change', () => {

    grid.innerHTML = "";
    createGrid(rangeInput.value);
})

createGrid(rangeInput.defaultValue);
const grid = document.getElementById('container');
const rangeInput = document.querySelector('input[type="range"]');
const eraseBtn = document.querySelector('.erase-btn');
const colorBtn = document.querySelector('.color-btn');
const randomBtn = document.querySelector('.random-btn');
const greyBtn = document.querySelector('.grey-btn');
let currendMode = 'black';
let rgbColor = "";
let hue = 0.1;





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

function setCurrentMode(mode) {

   currendMode = mode;
}

function randomColor() {
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    rgbColor = `rgb(${red}, ${blue}, ${green});`
    console.log(rgbColor)
    return rgbColor;
}



function setColor(e) {
   
    if(currendMode == 'black') {
        e.target.style.cssText = `background-color: ${currendMode}`;
    }else if(currendMode == 'white') {
        e.target.style.cssText = `background-color: ${currendMode}`;
    }else if(currendMode == 'random'){
        e.target.style.cssText = `background-color: ${rgbColor}`;
    }else {

    }
    
}

eraseBtn.addEventListener('click', () => {
    setCurrentMode('white');
})

colorBtn.addEventListener('click', () => {
    setCurrentMode('black');
})

randomBtn.addEventListener('click', () => {
   setCurrentMode('random');
   randomColor();
  
})

greyBtn.addEventListener('click', ()=> {
    setCurrentMode('grey');

} )


rangeInput.addEventListener('change', () => {

    grid.innerHTML = "";
    createGrid(rangeInput.value);
})

createGrid(rangeInput.defaultValue);
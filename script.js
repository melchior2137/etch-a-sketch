let gridContainer = document.querySelector("#grid");
let columnCount = 4*384; //base value
let currentColor = "#" + Math.floor(Math.random()*16777215).toString(16);
let selection="rainbow";

createGrid(columnCount);
function createGrid(columnCount){
for(let i = 0; i < columnCount; i++ ){
let gridCell = document.createElement("div");
gridCell.className = "grid-cell";
gridContainer.appendChild(gridCell);
}
}


let gridCells = document.querySelectorAll(".grid-cell");

gridCells.forEach( gridCell => gridCell.addEventListener('mouseover', draw));

function draw(event){
    if(event.buttons == 1 || event.buttons == 3){
    //event.target.classList.add("grid-cell-hovered");
    event.target.style.background= getCurrentColor(selection);
    }
};


function getCurrentColor(selection){
    console.log(selection);
    if(selection=="pen"){
    return setColor();
    }
    else if(selection=="rubber"){
        return "white";
    }
    else if(selection=="rainbow"){
    return "#" + Math.floor(Math.random()*16777215).toString(16);
    }
}

let clearButton = document.querySelector("#clear-button");
clearButton.addEventListener('click', clearGrid);
function clearGrid(){
    gridCells.forEach( gridCell => gridCell.style.background="white");
};

let root = document.documentElement;
let chosenColor = document.querySelector("#chosenColor");
chosenColor.addEventListener('change', setColor(event));

function setColor(event){
gridCells.forEach( gridCell => gridCell.classList.remove("grid-cell-hovered"));
console.log(event);
};


let pixelDensity = document.querySelectorAll(".pixels");
let gridLayout = document.querySelector("#grid");

pixelDensity.forEach(pixel => pixel.addEventListener('click', event =>{
    clearGrid();
    pixelDensity.forEach(pixel => pixel.setAttribute('style', 'background-color:black;color:white;'))
    pixel.setAttribute('style', 'background-color:white; color:black;');
    switch (event.target.value){
        case 'small':
            columnCount=384/2;
            gridLayout.setAttribute('style', 'grid-template-columns: repeat(12, 1fr); grid-template-rows: repeat(8, 1fr);')
            createGrid(columnCount);
            break;
        case 'medium':
            columnCount=384;
            gridLayout.setAttribute('style', 'grid-template-columns: repeat(24, 1fr); grid-template-rows: repeat(16, 1fr);')
            createGrid(columnCount);

            break;
        case 'high':
            columnCount=4*384;
            gridLayout.setAttribute('style', 'grid-template-columns: repeat(48, 1fr); grid-template-rows: repeat(32, 1fr);')
            createGrid(columnCount);

            break;
    }
}))


let tools = document.querySelectorAll(".tools");
tools.forEach(tool => tool.addEventListener('click', event =>{
    tools.forEach(tool => tool.setAttribute('style', 'background-color:black;color:white;'));
    event.target.setAttribute('style', 'background-color:white;color:black;');
    selection = event.target.value;

}))